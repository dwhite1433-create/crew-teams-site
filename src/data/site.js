// Single source of truth for navigation, contact details and shared copy.
// Edit here once and every page picks it up.

export const site = {
  name: 'CrewTeams',
  domain: 'crewteams.ai',
  email: 'info@crewteams.ai',
  address: '402 Seville Avenue, Newport Beach, CA 92661',
  tagline: 'Engage. Predict. Orchestrate.',
  demoUrl: '/get-started/',
  loginUrl: '#login',
};

export const nav = [
  {
    label: 'Platform',
    href: '/platform/',
    children: [
      { label: 'Platform Overview', href: '/platform/' },
      { label: 'CARI™ Agentic AI', href: '/platform/cari/' },
      { label: 'Biometric Time & Attendance', href: '/platform/time-attendance/' },
      { label: 'Mobilize™ — The Crew App', href: '/platform/mobilize/' },
      { label: 'Compliance Shield™', href: '/platform/compliance-shield/' },
      { label: 'Advanced Scheduling', href: '/platform/scheduling/' },
      { label: 'Integrations', href: '/platform/integrations/' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Construction', href: '/industries/construction/' },
      { label: 'Industrial Cleaning', href: '/industries/industrial-cleaning/' },
      { label: 'Manufacturing', href: '/industries/manufacturing/' },
      { label: 'Security Services', href: '/industries/security/' },
      { label: 'Transportation & Logistics', href: '/industries/transportation/' },
      { label: 'Labor Disruption', href: '/industries/labor-disruption/' },
    ],
  },
  {
    label: 'Company',
    href: '/company/',
    children: [
      { label: 'About Us', href: '/company/' },
      { label: 'Partners', href: '/company/partners/' },
      { label: 'The Science of Motivation', href: '/company/science/' },
    ],
  },
];

export const capabilities = [
  { n: '01', verb: 'Verify', name: 'Biometric Time & Attendance', text: 'Facial geometry and liveness detection with geofencing. Works offline, so remote sites still get a verified punch.' },
  { n: '02', verb: 'Comply', name: 'Compliance Shield™', text: 'Monitors credentials and enforces overtime, rest, meal-break, union and CBA rules, so only qualified people are on the job.' },
  { n: '03', verb: 'Engage', name: 'Mobilize™ — The Crew App', text: 'Schedule, pay, credentials and recognition in one mobile hub, in each worker’s language, with the CARI™ assistant built in.' },
  { n: '04', verb: 'Predict', name: 'AI-Assisted Insights', text: 'Forecasts attrition, no-shows and labor cost, with narrative insights you can question in plain language.' },
  { n: '05', verb: 'Schedule', name: 'Advanced Scheduling', text: 'Demand-driven shift recommendations with credential checks and overtime prevention built in.' },
  { n: '06', verb: 'Develop', name: 'Just-in-Time Learning', text: 'Skills, safety steps and site protocols delivered in 90 seconds, right when a worker needs them.' },
  { n: '07', verb: 'Orchestrate', name: 'Dynamic Labor Orchestration', text: 'Continuously weighs skills, credentials, compliance and real-time demand to set labor strategy across every site.' },
  { n: '08', verb: 'Reward', name: 'Instant Pay & Recognition', text: 'Same-shift pay plus science-backed recognition tied to real progress.' },
];
