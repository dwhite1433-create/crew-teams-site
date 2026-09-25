// Single source of truth for navigation, contact details and shared copy.
// Edit here once and every page picks it up.

export const site = {
  name: 'CrewTeams',
  domain: 'crewteams.ai',
  email: 'info@crewteams.ai',
  address: '402 Seville Avenue, Newport Beach, CA 92661',
  tagline: 'Engage. Predict. Orchestrate.',
  positioning: 'The workforce platform for the crews who keep the physical economy running.',
  demoUrl: '/get-started/',
  loginUrl: '#login',
};

export const nav = [
  {
    label: 'Platform',
    href: '/platform/',
    children: [
      { label: 'Platform Overview', href: '/platform/' },
      { label: 'Biometric Time & Attendance', href: '/platform/time-attendance/' },
      { label: 'Mobilize™ — The Crew App', href: '/platform/mobilize/' },
      { label: 'Compliance Shield™', href: '/platform/compliance-shield/' },
      { label: 'CARI™ Agentic AI', href: '/platform/cari/' },
      { label: 'Integrations', href: '/platform/integrations/' },
    ],
  },
  {
    label: 'Company',
    href: '/company/',
    children: [
      { label: 'Industries We Serve', href: '/company/industries/' },
      { label: 'Partners', href: '/company/partners/' },
      { label: 'The Science of Motivation', href: '/company/science/' },
    ],
  },
];

export const capabilities = [
  { n: '01', verb: 'Verify', name: 'Biometric Time & Attendance', text: 'Facial geometry and liveness detection with geofencing. Works offline, so remote sites still get a verified punch.' },
  { n: '02', verb: 'Comply', name: 'Compliance Shield™', text: 'Monitors credentials and enforces overtime, rest, meal-break, union and CBA rules, so only qualified people are on the job.' },
  { n: '03', verb: 'Engage', name: 'Mobilize™ — The Crew App', text: 'Shifts, pay, credentials and recognition in one mobile hub, in each worker’s language, with the CARI™ assistant built in.' },
  { n: '04', verb: 'Reward', name: 'Instant Pay & Recognition', text: 'Same-shift pay plus science-backed recognition tied to real progress.' },
];
