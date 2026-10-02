// AVENLO AI CAREER ENGINE (Assistive Technology)
class AvenloAI {
  constructor() {}

  evaluateAssessment(answers) {
    const role = answers.currentRole || 'Technology Professional';
    const exp = Number(answers.experience) || 3;
    const skills = answers.skills || [];

    const score = Math.min(100, Math.max(40, 55 + (exp * 3) + (skills.length * 2) + Math.floor(Math.random() * 15)));

    const strengths = this._identifyStrengths(skills, exp, role);
    const gaps = this._identifyGaps(skills, role);
    const directions = this._suggestDirections(skills, exp, role);
    const learning = this._suggestLearning(gaps);

    return {
      score,
      strengths,
      skillGaps: gaps,
      suggestedDirections: directions,
      suggestedLearning: learning,
      summary: `Based on your ${exp} years of experience and skillset, you show strong capability in ${strengths[0] || 'your core domain'}. Consider developing ${gaps[0] || 'adjacent skills'} to unlock additional career opportunities.`
    };
  }

  _identifyStrengths(skills, exp, role) {
    const s = [];
    if (skills.some(sk => ['React', 'Vue', 'Angular', 'Next.js'].includes(sk))) s.push('Modern Frontend Architecture');
    if (skills.some(sk => ['Node.js', 'Go', 'Python', 'Java'].includes(sk))) s.push('Backend Systems Engineering');
    if (skills.some(sk => ['Product Strategy', 'User Research', 'Agile'].includes(sk))) s.push('Product Strategy & Execution');
    if (skills.some(sk => ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'].includes(sk))) s.push('Cloud & Infrastructure');
    if (skills.some(sk => ['SQL', 'PostgreSQL', 'MongoDB', 'Redis'].includes(sk))) s.push('Data Architecture');
    if (skills.some(sk => ['TypeScript', 'Testing', 'CI/CD'].includes(sk))) s.push('Engineering Quality & Process');
    if (exp >= 5) s.push('Technical Leadership Readiness');
    if (s.length === 0) s.push('Core Domain Expertise');
    return s.slice(0, 4);
  }

  _identifyGaps(skills, role) {
    const all = ['System Design', 'Distributed Systems', 'Security Best Practices', 'Performance Engineering', 'ML/AI Fundamentals', 'Data Pipeline Architecture', 'Observability & SRE'];
    return all.filter(g => !skills.some(s => g.toLowerCase().includes(s.toLowerCase()))).slice(0, 3);
  }

  _suggestDirections(skills, exp, role) {
    const d = [];
    if (exp >= 5 && skills.some(s => ['React', 'TypeScript', 'Next.js'].includes(s))) d.push('Staff / Principal Frontend Engineer');
    if (exp >= 4 && skills.some(s => ['Go', 'Python', 'Java', 'Node.js'].includes(s))) d.push('Senior Backend / Platform Engineer');
    if (skills.some(s => ['Product Strategy', 'User Research'].includes(s))) d.push('Senior Product Manager');
    if (exp >= 6) d.push('Engineering Manager / Technical Lead');
    if (d.length === 0) d.push('Senior Individual Contributor', 'Technical Specialist');
    return d.slice(0, 3);
  }

  _suggestLearning(gaps) {
    const map = {
      'System Design': 'System Design Interview Preparation',
      'Distributed Systems': 'Distributed Systems Fundamentals',
      'Security Best Practices': 'Application Security & OWASP',
      'Performance Engineering': 'Web Performance Optimization',
      'ML/AI Fundamentals': 'Machine Learning Foundations',
      'Data Pipeline Architecture': 'Data Engineering with Modern Tools',
      'Observability & SRE': 'Site Reliability Engineering Practices'
    };
    return gaps.map(g => map[g] || g).slice(0, 3);
  }

  getAssessmentQuestions() {
    return [
      {
        id: 'q1', section: 'Experience',
        question: 'How would you describe your primary professional domain?',
        options: ['Software Engineering', 'Product Management', 'Design', 'Data & Analytics', 'DevOps & Infrastructure', 'Other']
      },
      {
        id: 'q2', section: 'Experience',
        question: 'How many years of professional experience do you have?',
        options: ['0-2 years', '2-4 years', '4-6 years', '6-8 years', '8+ years']
      },
      {
        id: 'q3', section: 'Skills',
        question: 'Which areas do you feel most confident in?',
        options: ['Technical depth in my stack', 'Cross-functional collaboration', 'System architecture & design', 'People leadership', 'Business & strategy', 'Communication & mentoring']
      },
      {
        id: 'q4', section: 'Skills',
        question: 'How comfortable are you with system design and architecture decisions?',
        options: ['Very comfortable — I lead these discussions', 'Comfortable — I contribute effectively', 'Learning — I understand the concepts', 'Developing — I need more experience']
      },
      {
        id: 'q5', section: 'Growth',
        question: 'Where do you want to grow in the next 2 years?',
        options: ['Deeper technical expertise', 'Broader technical breadth', 'People management', 'Product & business understanding', 'A different domain entirely']
      },
      {
        id: 'q6', section: 'Growth',
        question: 'What motivates you most in your work?',
        options: ['Solving hard technical problems', 'Building products that impact users', 'Leading and mentoring a team', 'Learning new technologies', 'Business impact and growth']
      },
      {
        id: 'q7', section: 'Direction',
        question: 'What type of company environment do you prefer?',
        options: ['Early-stage startup (0-50 people)', 'Growth-stage scaleup (50-500 people)', 'Established tech company (500+ people)', 'Enterprise / MNC', 'No strong preference']
      },
      {
        id: 'q8', section: 'Direction',
        question: 'How important is work-life balance vs. rapid career growth?',
        options: ['Balance is most important', 'Growth is most important', 'I want both equally', 'It depends on the opportunity']
      }
    ];
  }
}

window.ai = new AvenloAI();
