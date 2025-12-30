/* eslint-disable */
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import portfolioCapitalizationChatbot from '../images/portfolio/portfolio-capitalization-chatbot.png';
import portfolioAiCenter from '../images/portfolio/portfolio-ai-center.png';
import portfolioCapexAgent from '../images/portfolio/portfolio-capex-agent.png';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Megan Davis – AI Product & Portfolio Leader',
  description:
    'Senior Technical Product Manager focused on AI transformation, portfolio management, and enterprise-ready AI products.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Megan Davis.`,
 description: (
  <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Hi, I'm Megan. I build human-centered systems and workflows that help people work better. My work is guided by a belief that powerful technology, whether AI, automation, or emerging tools, should be useful, understandable, and accessible to everyone. As an AI Transformation and Enablement Lead, I help teams adopt new capabilities safely and confidently. I created an AI Center of Excellence, built responsible AI guardrails, and developed frameworks that make it easier for non-technical personas to leverage generative AI in practical, meaningful, and impactful ways.
    </p>

    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I've built hands-on tools like a ChatGPT-powered chatbot-builder and a capital assessment support bot that evolved into an embedded ROVO agent inside Jira. I'm currently using Cursor to build interactive prototypes that pressure test new concepts, win stakeholder buy-in, and illustrate the desired end user experience to technical teams building the end solution. I believe the best technology blends into the natural flow of work, and that's what I build toward.
    </p>
  </>
),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:
    'Product Manager who builds products users actually need and are easy to use. I work across engineering, data, design, and business teams to ship high-value features iteratively, validating feasibility early so roadmaps aren\'t built on wishful thinking. I\'m committed to responsible design, especially for AI features that require explainability and transparency. I\'m ruthless about what we ship and allergic to products that are innovative in theory but useless in practice.',
  aboutItems: [
    { label: 'Location', text: 'Seattle, WA', Icon: MapIcon },
    {
      label: 'Current Role',
      text: 'Sr Technical Product Manager – AI Transformation & Enablement',
      Icon: CalendarIcon,
    },
    { label: 'Industry Experience', text: 'Telecom, Retail, eCommerce, Supply Chain', Icon: FlagIcon },
    {
      label: 'Interests',
      text: 'AI ethics, no-code tools, travel, stand-up comedy, great coffee',
      Icon: SparklesIcon,
    },
    { label: 'Study', text: 'B.B.A., Georgia State University', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'T-Mobile', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'AI & Product',
    skills: [
      { name: 'AI Product Strategy & Roadmapping', level: 8 },
      { name: 'Generative AI & Custom GPTs', level: 9 },
      { name: 'AI Governance & Compliance Frameworks', level: 7 },
      { name: 'User-Centered Product Discovery', level: 7 },
    ],
  },
  {
    name: 'Portfolio, Program & Delivery',
    skills: [
      { name: 'IT Intake Design', level: 7 },
      { name: 'Portfolio Prioritization & 1–N Frameworks', level: 7 },
      { name: 'SaaS Product Ownership & Vendor Management', level: 7 },
      { name: 'Stakeholder Alignment & Executive Reporting', level: 7 },
    ],
  },
  {
    name: 'Data, Tools & Platforms',
    skills: [
      { name: 'Jira & Jira ROVO', level: 6 },
      { name: 'Microsoft 365 & Collaboration Workflows', level: 8 },
      { name: 'Digital Analytics & Performance Metrics', level: 7 },
    ],
  },
  {
    name: 'AI Tools',
    skills: [
      { name: 'ChatGPT', level: 8 },
      { name: 'Claude', level: 8 },
      { name: 'Copilot 365', level: 7 },
      { name: 'Gamma AI', level: 7 },
      { name: 'Cursor AI', level: 5 },
      { name: 'Lovable', level: 3 },
      { name: 'Replit', level: 3 },
    ],
  },
  {
    name: 'Business & Commercial',
    skills: [
      { name: 'P&L Ownership & Financial Analysis', level: 8 },
      { name: 'Vendor & Supplier Strategy', level: 8 },
      { name: 'Cross-Functional Leadership', level: 9 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AI Center of Excellence & Builders Hub',
    description:
      'Established an AI Center of Excellence, learning hub, and universal bot builder GPT to scale AI safely through reusable tools, upskilling programs, and the 100-Day AI Challenge.',
    url: 'https://ozone-legend-96955774.figma.site',
    image: portfolioAiCenter,
  },
  {
    title: 'Capitalization Chatbot → Jira ROVO Agent',
    description:
      'Designed and launched a patent-pending accounting capitalization chatbot that evolved into a Jira ROVO agent to automate capitalization assessments and improve decision speed and accuracy.',
    url: 'https://vimeo.com/1150240749',
    image: portfolioCapitalizationChatbot,
  },
  {
    title: 'CapEx Self-Assessment Agent',
    description:
      'Interactive prototype of an AI agent that monitors Jira for new Epics, extracts context from project artifacts, and pre-populates capitalization questionnaires for human review. Evolved from an earlier ChatGPT-based chatbot into a proactive, workflow-integrated solution with full transparency and Accounting Team oversight.',
    url: 'https://claude.ai/public/artifacts/845e4b8d-29cb-4f0d-ab2c-dfa9f6efd25e',
    image: portfolioCapexAgent,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2015',
    location: 'Georgia State University',
    title: 'Bachelor of Business Administration',
    content: (
      <p>
        Completed a B.B.A. with a strong foundation in business, analytics, and operations later applied to product
        management, portfolio strategy, and AI-enabled transformation.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2025 – Present',
    location: 'T-Mobile – Bellevue, WA',
    title: 'Sr Technical Product Manager, AI Transformation & Enablement Lead',
    content: (
      <p>
        Established an AI Center of Excellence, learning hub, and universal bot builder GPT. Built an AI governance
        framework and advisor registry, launched a patent-pending capitalization chatbot that evolved into a Jira ROVO
        agent, and created AI shared services and an “AI colleague” concept to democratize domain specific expertise across portfolio,
        program, change management, IT intake, and SOX compliance.
      </p>
    ),
  },
  {
    date: 'August 2024 – June 2025',
    location: 'T-Mobile – Bellevue, WA',
    title: 'Sr Technical Product Manager, IT Intake & Engagement',
    content: (
      <p>
        Launched the Single Front Door to streamline IT intake across Compliance, Consumer, Marketing, Back Office,
        Cybersecurity, and IT domains. Built an IT 1–N prioritization framework, designed an intake performance dashboard, and stood up an IT
        critical staffing forum to improve visibility and decision-making for 3K+ annual initiatives.
      </p>
    ),
  },
  {
    date: 'July 2023 – July 2024',
    location: 'T-Mobile – Bellevue, WA',
    title: 'Sr Technical Product Manager, SaaS Product Owner',
    content: (
      <p>
        Led the development and on-time launch of a Portfolio SaaS MVP used by 1,600 users across IT and business
        portfolio teams. Coordinated Finance, Accounting, SOX, Agile Coaches, and developers, and negotiated with the
        SaaS provider to close critical functionality gaps.
      </p>
    ),
  },
  {
    date: 'January 2022 – June 2023',
    location: 'T-Mobile – Bellevue, WA',
    title: 'Sr Technical Product Manager, Digital Marketing Event',
    content: (
      <p>
        Provided weekly portfolio reporting to the CDO &amp; CIO, managed the transition to 11 strategic suppliers
        representing $200M in annual spend, and created prototypes and requirements for supplier payment and performance
        tooling.
      </p>
    ),
  },
  {
    date: 'January 2020 – January 2022',
    location: 'Amazon – Seattle, WA',
    title: 'Vendor Manager, Amazon Fashion',
    content: (
      <p>
        Managed a strategic fashion brand portfolio with $500M annual revenue and 36% growth, owned P&amp;L with
        $325M+ in incremental profit, and scaled an emerging brands accelerator from 11 pilot companies to 70+.
      </p>
    ),
  },
  {
    date: 'September 2018 – December 2019',
    location: 'The Home Depot – Atlanta, GA',
    title: 'Sr Business Analyst',
    content: (
      <p>
        Sourced strategic suppliers to reduce raw material spend, co-led the design and launch of a Kanban inventory
        management system, and co-developed IT tools to manage supplier scorecard data.
      </p>
    ),
  },
  {
    date: 'May 2014 – September 2018',
    location: 'Costco Wholesale – Duluth, GA',
    title: 'Inventory Analyst',
    content: (
      <p>
        Managed multiple international and domestic product categories, forecasted demand, leveraged BI Planning tools
        to avoid profit loss, and pitched new items to senior leadership to increase category profitability.
      </p>
    ),
  },
  {
    date: 'May 2013 – May 2014',
    location: 'Costco Wholesale – Duluth, GA',
    title: 'Traffic Manager',
    content: (
      <p>
        Analyzed ocean, rail, and over-the-road freight costs and coordinated shipments for the Southeast Region and
        Puerto Rico, translating business needs into logistics strategies.
      </p>
    ),
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'If you’re hiring for AI product leadership, building responsible AI frameworks, or just think my background could be a great fit for your team, I’d love to connect.',
  items: [
    {
      type: ContactType.Email,
      text: 'mdmegrose@gmail.com',
      href: 'mailto:mdmegrose@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Seattle, WA, USA',
      href: 'https://www.google.com/maps/place/Seattle,+WA',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/megrdavis/' },
];
