// AVENLO FOOTER
class AvenloFooter {
  constructor() {
    this.container = document.getElementById('siteFooter');
  }

  render() {
    this.container.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#home">
              <img src="avenlo_logo_svgs/avenlo-white.svg" alt="Avenlo" style="height:36px;width:auto;">
            </a>
            <p>
              Avenlo is a career and talent network helping professionals build stronger careers and connecting companies with relevant talent.
            </p>
          </div>

          <div class="footer-col">
            <h4>Candidates</h4>
            <ul class="footer-links">
              <li><a href="#join">Join Avenlo</a></li>
              <li><a href="#candidates">For Candidates</a></li>
              <li><a href="#about">About Avenlo</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Companies</h4>
            <ul class="footer-links">
              <li><a href="#companies">For Companies</a></li>
              <li><a href="#contact">Contact Avenlo</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Legal</h4>
            <ul class="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div style="color:#64748B;font-size:0.82rem;">
            © ${new Date().getFullYear()} Avenlo (avenlo.in). All rights reserved.
          </div>
          <div style="font-size:0.78rem;color:#475569;">
            Avenlo is a career and talent network. Employment decisions are made between the candidate and employer.
          </div>
        </div>
      </div>
    `;
  }
}

window.footer = new AvenloFooter();
