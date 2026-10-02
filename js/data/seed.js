// AVENLO SEED DATA
const SEED_DATA = {
  users: [
    {
      id: 'usr_cand_1',
      role: 'candidate',
      name: 'Aarav Sharma',
      email: 'aarav.sharma@example.in',
      phone: '+91 98765 12340',
      avatar: 'AS',
      city: 'Bengaluru',
      password: 'password123',
      createdAt: '2025-08-15T10:00:00Z'
    },
    {
      id: 'usr_cand_2',
      role: 'candidate',
      name: 'Priya Reddy',
      email: 'priya.reddy@example.in',
      phone: '+91 98765 12341',
      avatar: 'PR',
      city: 'Hyderabad',
      password: 'password123',
      createdAt: '2025-09-02T10:00:00Z'
    },
    {
      id: 'usr_cand_3',
      role: 'candidate',
      name: 'Rohan Gupta',
      email: 'rohan.gupta@example.in',
      phone: '+91 98765 12342',
      avatar: 'RG',
      city: 'Mumbai',
      password: 'password123',
      createdAt: '2025-09-10T10:00:00Z'
    },
    {
      id: 'usr_admin_1',
      role: 'admin',
      name: 'Avenlo Operations',
      email: 'admin@avenlo.in',
      phone: '+91 98765 00000',
      avatar: 'AV',
      city: 'Bengaluru',
      password: 'admin2025',
      createdAt: '2025-01-01T00:00:00Z'
    }
  ],

  candidateProfiles: [
    {
      userId: 'usr_cand_1',
      title: 'Senior Frontend Engineer',
      currentCompany: 'TechScale India',
      industry: 'Software & Internet',
      yearsExperience: 6,
      education: 'B.Tech Computer Science, NIT Surathkal',
      skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'CSS Architecture', 'Web Performance'],
      desiredRoles: ['Staff UI Engineer', 'Frontend Architect'],
      preferredLocations: ['Bengaluru', 'Remote'],
      workModePreference: 'Hybrid / Remote',
      expectedSalaryLPA: 30,
      noticePeriod: '30 Days',
      careerGoals: 'Move into a Staff / Principal UI Architect role at a Series B+ scaleup',
      cvFilename: 'Aarav_Sharma_CV.pdf',
      profileCompletion: 90,
      networkStatus: 'talent_network',
      statusNote: 'Profile vetted. Active in the Avenlo Talent Network.',
      assessmentCompleted: true,
      assessmentScore: 88,
      strengths: ['Modern React & Next.js Architecture', 'Core Web Vitals & Performance', 'Component Library Design'],
      skillGaps: ['Micro-frontend Orchestration', 'Advanced WebGL / Canvas'],
      suggestedDirections: ['Principal UI Architect at FinTech scaleup', 'Staff Engineer in HealthTech'],
      suggestedLearning: ['System Design for Frontend', 'Advanced State Management Patterns'],
      internalNotes: ['Strong candidate. High demand for React/Next.js stack.', 'Shortlisted for NexaHealth UI Lead role.']
    },
    {
      userId: 'usr_cand_2',
      title: 'Product Manager',
      currentCompany: 'PayFin Technologies',
      industry: 'FinTech',
      yearsExperience: 4,
      education: 'MBA, IIM Bangalore',
      skills: ['Product Strategy', 'User Research', 'Data Analytics', 'Agile', 'SQL', 'Figma'],
      desiredRoles: ['Senior Product Manager', 'Head of Product'],
      preferredLocations: ['Hyderabad', 'Bengaluru', 'Remote'],
      workModePreference: 'Hybrid',
      expectedSalaryLPA: 28,
      noticePeriod: '60 Days',
      careerGoals: 'Lead product at a growth-stage FinTech or HealthTech company',
      cvFilename: 'Priya_Reddy_CV.pdf',
      profileCompletion: 75,
      networkStatus: 'under_review',
      statusNote: 'Profile under review by the Avenlo team.',
      assessmentCompleted: false,
      assessmentScore: null,
      strengths: ['Product Strategy', 'User Research & Empathy'],
      skillGaps: ['Technical Depth in ML/AI Products'],
      suggestedDirections: ['Senior PM at HealthTech', 'Product Lead at FinTech'],
      suggestedLearning: ['Data Science Fundamentals', 'Technical Product Management'],
      internalNotes: ['Interesting PM background. Assessment pending.']
    },
    {
      userId: 'usr_cand_3',
      title: 'Backend Engineer',
      currentCompany: 'CloudNova',
      industry: 'SaaS & Cloud',
      yearsExperience: 3,
      education: 'B.E. Information Technology, VJTI Mumbai',
      skills: ['Go', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
      desiredRoles: ['Senior Backend Engineer', 'Platform Engineer'],
      preferredLocations: ['Mumbai', 'Pune', 'Remote'],
      workModePreference: 'Remote Only',
      expectedSalaryLPA: 22,
      noticePeriod: '30 Days',
      careerGoals: 'Deepen distributed systems expertise and grow into platform engineering',
      cvFilename: 'Rohan_Gupta_CV.pdf',
      profileCompletion: 65,
      networkStatus: 'new',
      statusNote: 'New profile. Pending initial review.',
      assessmentCompleted: false,
      assessmentScore: null,
      strengths: ['Go & Systems Programming', 'Cloud-Native Architecture'],
      skillGaps: ['Distributed Consensus', 'Observability & SRE Practices'],
      suggestedDirections: ['Platform Engineer at SaaS company', 'Senior Backend at Cloud Infra startup'],
      suggestedLearning: ['Distributed Systems Design', 'Advanced Kubernetes Patterns'],
      internalNotes: []
    }
  ],

  companyEnquiries: [
    {
      id: 'enq_1',
      companyName: 'NexaHealth Technologies',
      website: 'https://nexahealth.in',
      industry: 'HealthTech',
      companySize: '100-500 employees',
      location: 'Bengaluru',
      contactPerson: 'Vikram Nair',
      email: 'vikram@nexahealth.in',
      phone: '+91 99887 76655',
      roleTitle: 'Lead UI & Frontend Architect',
      openings: 1,
      requiredExperience: '5-8 Years',
      requiredSkills: ['React', 'TypeScript', 'Next.js', 'Performance Optimization'],
      workMode: 'Hybrid',
      salaryRange: '₹28 - 38 LPA',
      employmentType: 'Full-time',
      joiningTimeline: 'Within 30 Days',
      additionalInfo: 'Building a patient-facing diagnostic platform. Need strong UI architecture skills.',
      status: 'Matching Talent',
      assignedTo: 'Avenlo Operations',
      internalNotes: ['High priority. Budget confirmed.', 'Shortlisted Aarav Sharma.'],
      createdAt: '2025-09-20T14:00:00Z'
    },
    {
      id: 'enq_2',
      companyName: 'FinScale',
      website: 'https://finscale.io',
      industry: 'FinTech',
      companySize: '20-100 employees',
      location: 'Mumbai',
      contactPerson: 'Ananya Desai',
      email: 'ananya@finscale.io',
      phone: '+91 99887 76600',
      roleTitle: 'Senior Backend Engineer (Go/AWS)',
      openings: 2,
      requiredExperience: '3-6 Years',
      requiredSkills: ['Go', 'AWS', 'PostgreSQL', 'Distributed Systems'],
      workMode: 'Remote (India)',
      salaryRange: '₹20 - 30 LPA',
      employmentType: 'Full-time',
      joiningTimeline: 'Within 30 Days',
      additionalInfo: 'Building real-time payments infrastructure.',
      status: 'New',
      assignedTo: null,
      internalNotes: [],
      createdAt: '2025-10-01T09:00:00Z'
    }
  ],

  services: [
    {
      id: 'svc_cv_review',
      title: 'Expert CV Review & Overhaul',
      description: 'Senior recruiter line-by-line feedback, ATS scoring, and impact quantification for tech leaders.',
      turnaround: '2 Business Days',
      priceINR: 1499,
      active: true
    },
    {
      id: 'svc_career_review',
      title: '1-on-1 System & Architecture Mock',
      description: 'Structured technical deep-dive and mock architectural defense with a Staff/Principal engineer.',
      turnaround: '3 Business Days',
      priceINR: 2499,
      active: true
    },
    {
      id: 'svc_accelerator',
      title: 'Executive Career Accelerator',
      description: 'End-to-end strategic coaching package including executive positioning, salary negotiation, and roadmap.',
      turnaround: '5 Business Days',
      priceINR: 4999,
      active: true
    }
  ],

  orders: [
    {
      id: 'ord_101',
      userId: 'usr_cand_1',
      userName: 'Aarav Sharma',
      userEmail: 'aarav.sharma@example.in',
      serviceId: 'svc_cv_review',
      serviceName: 'Expert CV Review & Overhaul',
      amountINR: 1499,
      status: 'completed',
      paymentMethod: 'Razorpay UPI',
      createdAt: '2025-09-22T11:30:00Z'
    }
  ],

  settings: {
    whatsappNumber: '+919876543210',
    supportEmail: 'hello@avenlo.in',
    companyName: 'Avenlo Career Technologies Pvt Ltd',
    gstNumber: 'GSTIN: 29AAACA0001K1Z1',
    address: 'Bengaluru, Karnataka, India'
  }
};
