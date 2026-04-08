import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Education from './components/Education';
import Courses from './components/Courses';
import Projects from './components/Projects';
import photo from './assets/CV_photo.jpg';

// ── DATA ──
const cvData = {
  name: 'Taras Musii',
  subtitle: 'Cybersecurity Student',
  photo: photo,

  contacts: [
    { icon: '📞', text: '+380xxxxxxxxx' },
    { icon: '✉️', text: 'taras.musii.kb.2023@lpnu.ua' },
    { icon: '📍', text: 'Lviv, Ukraine' },
  ],

  hardSkills: [
    'Networking: TCP/IP, VLAN, DNS, DHCP, HTTP/HTTPS, SSH.',
    'Scripting: Python, Bash.',
    'Databases: MySQL.',
    'Environments: Linux, GCP (basic).',
    'Cybersecurity tools: Wireshark, Nmap, Kali Linux, Burp Suite, GPG.',
    'Security frameworks: ISO 27001, CVSS, Risk Assessment.',
  ],

  softSkills: [
    'Teamwork',
    'Fast Learner',
    'Critical Thinking',
    'Adaptability',
    'Punctuality',
  ],

  languages: ['Ukrainian (Native)', 'English (B1/Intermediate)'],

  profile: `I am a cybersecurity student with foundational knowledge of computer networking, cloud
technologies, information security principles and a basic understanding of web
functionality. I have practical experience with Linux, Wireshark, Nmap, along with
introductory familiarity in ISO 27001 information security management systems and risk
assessment processes. The more I learn, the more I realize how much there is to explore,
and this motivates me to keep growing in the ever-changing field of cybersecurity.`,

  education: [
    {
      school: 'Lviv Polytechnic National University',
      degree: "Bachelor's Degree in Cybersecurity and Information Protection",
      date: '2023 – 2027',
    },
  ],

  courses: [
    {
      title: 'CYBERSECURITY INTERNSHIP | SoftServe',
      link: 'https://career.softserveinc.com/en-us/certification/verification',
      meta: 'Date: 18/07/2024 – 19/08/2024 · Series UY № 19927/2024',
      bullets: [
        'Analyzed memory dumps using the Volatility Framework.',
        'Implemented TLS certificates for secure data exchange and configured database encryption.',
        'Implemented an NGINX load balancer to distribute traffic among web servers on Linux OS.',
      ],
    },
    {
      title: 'AWS Cloud Security Foundations | AWS Academy',
      link: 'https://www.credly.com/badges/b01363c3-3005-4605-b449-cf716742a69b/public_url',
      bullets: [
        'Gained foundational knowledge of cybersecurity principles in cloud computing and implemented them through hands-on labs.',
      ],
    },
    {
      title: 'Cloud security | Google Cloud',
      link: 'https://www.skills.google/public_profiles/a219e480-3eef-4649-bbf8-9b7ee90e983b',
      bullets: [
        'Introduction to Security Principles in Cloud Computing.',
        'Strategies for Cloud Security Risk Management.',
        'Cloud Security Risks: Identify and Protect Against Threats',
      ],
    },
  ],

  projects: [
    {
      title: 'Corporate Network Design & Security | Course Project',
      bullets: [
        'Designed and simulated a corporate network with branch offices in Cisco Packet Tracer, including a demilitarized zone (DMZ), and configured DNS and dynamic OSPF routing.',
        'Implemented NAT to provide secure internet access, and configured firewall rules to prevent unauthorized access from public networks.',
        'Engineered a tunnel between branch offices and the headquarters using the GRE protocol to enable access to corporate resources via a private channel.',
      ],
    },
    {
      title: 'Database & Information System Design | Course Project',
      bullets: [
        'Executed domain analysis and ERD-modeling to design a relational database normalized to form that ensures data integrity and zero redundancy.',
        'Developed a PHP/MySQL web application with secure CRUD operations and access control.',
      ],
    },
  ],
};

// ── COMPONENT ──
export default function App() {
  return (
    <div className="min-h-screen bg-[#d0d2d6] flex justify-center items-start py-10 px-5 font-['Source_Serif_4',Georgia,serif] text-[#1a1a2e]">
      <div
        className="bg-white flex flex-col"
        style={{
          width: 880,
          maxWidth: '100%',
          boxShadow: '0 8px 40px rgba(0,0,0,0.22)',
        }}
      >
        {/* Header */}
        <Header
          name={cvData.name}
          subtitle={cvData.subtitle}
          photoSrc={cvData.photo}
        />

        {/* Lower section */}
        <div className="flex flex-row flex-1">
          {/* Sidebar */}
          <Sidebar
            contacts={cvData.contacts}
            hardSkills={cvData.hardSkills}
            softSkills={cvData.softSkills}
            languages={cvData.languages}
          />

          {/* Main content */}
          <main className="flex-1 bg-white">
            <div className="px-9 pt-[30px] pb-10 flex flex-col gap-6">
              <Profile text={cvData.profile} />
              <Education entries={cvData.education} />
              <Courses entries={cvData.courses} />
              <Projects entries={cvData.projects} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}