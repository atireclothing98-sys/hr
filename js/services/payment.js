// AVENLO PAYMENT SERVICE (Razorpay Architecture)
class AvenloPayment {
  constructor() {
    this.currency = 'INR';
  }

  initiateCheckout(serviceId, user) {
    if (!user) {
      window.toast.show('Please log in to purchase this service.', 'error');
      window.router.navigate('login');
      return;
    }
    const service = window.db.getAllServices().find(s => s.id === serviceId);
    if (!service) {
      window.toast.show('Service not found.', 'error');
      return;
    }
    this._simulatePayment(service, user);
  }

  _simulatePayment(service, user) {
    const confirmed = confirm(`Purchase "${service.title}" for ₹${service.priceINR.toLocaleString('en-IN')}?\n\nThis is a demo. In production, Razorpay checkout opens here.`);
    if (!confirmed) return;

    const order = window.db.addOrder({
      userId: user.id,
      serviceId: service.id,
      serviceName: service.title,
      amountINR: service.priceINR,
      status: 'completed',
      paymentMethod: 'demo',
      transactionRef: 'pay_demo_' + Date.now()
    });

    window.toast.show(`Payment successful! "${service.title}" purchased.`, 'success');
    window.router.render();
  }
}

window.payment = new AvenloPayment();
