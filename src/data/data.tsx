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

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
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
  Testimonials: 'testimonials',
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
        I’m a Seattle-based <strong className="text-stone-100">Senior Technical Product Manager</strong> focused on AI
        transformation, portfolio management, and enablement. At{' '}
        <strong className="text-stone-100">T-Mobile</strong>, I build AI solutions, intake frameworks, and portfolio
        tools that help leaders see all the work, make better trade-offs, and deliver outcomes with confidence.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My background spans AI and automation, SaaS product ownership, IT intake and engagement, digital supplier
        ecosystems, and a $500M retail portfolio.
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
    'Senior Technical Product Manager who thrives at the intersection of technology, strategy, and human impact. I build AI products, portfolio frameworks, and enablement programs that make work simpler, smarter, and safer—while staying grounded in compliance, financial rigor, and real business outcomes.',
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
      text: 'AI ethics, no-code tools, travel, dachshunds, great coffee',
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
      { name: 'AI Product Strategy & Roadmapping', level: 9 },
      { name: 'Generative AI & Custom GPTs', level: 9 },
      { name: 'AI Governance & Compliance Frameworks', level: 8 },
      { name: 'User-Centered Product Discovery', level: 8 },
    ],
  },
  {
    name: 'Portfolio, Program & Delivery',
    skills: [
      { name: 'IT Intake & Single Front Door Design', level: 9 },
      { name: 'Portfolio Prioritization & 1–N Frameworks', level: 9 },
      { name: 'SaaS Product Ownership & Vendor Management', level: 8 },
      { name: 'Stakeholder Alignment & Executive Reporting', level: 8 },
    ],
  },
  {
    name: 'Data, Tools & Platforms',
    skills: [
      { name: 'Jira & Jira ROVO', level: 8 },
      { name: 'Power BI & KPI Design', level: 7 },
      { name: 'Microsoft 365 & Collaboration Workflows', level: 8 },
      { name: 'Digital Analytics & Performance Dashboards', level: 7 },
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
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'Capitalization Chatbot → Jira ROVO Agent',
    description:
      'Designed and launched a patent-pending accounting capitalization chatbot that evolved into a Jira ROVO agent to automate capitalization assessments and improve decision speed and accuracy.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Single Front Door & IT 1–N Prioritization',
    description:
      'Launched T-Mobile’s Single Front Door to streamline IT intake across multiple domains, supporting 3K+ annual initiatives, and built an IT 1–N prioritization framework and assessment dashboard.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Portfolio SaaS Solution MVP',
    description:
      'Spearheaded development and on-time launch of a Portfolio SaaS MVP adopted by 1,600 users across IT and business portfolio teams.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Digital Supplier Ecosystem & Tooling',
    description:
      'Managed transition to 11 strategic suppliers with $200M in annual digital spend and created prototypes for supplier payment and performance tooling.',
    url: '#',
    image: porfolioImage5,
  },
  {
    title: 'Amazon Fashion Portfolio & Accelerator',
    description:
      'Managed a $500M Amazon Fashion portfolio with 36% revenue growth and scaled an emerging brands accelerator from 11 to 70+ companies.',
    url: '#',
    image: porfolioImage6,
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
        Completed a B.B.A. with a strong foundation in business, analytics, and operations—later applied to product
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
        agent, and created AI shared services and an “AI colleague” concept to extend expertise across portfolio,
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
        Cybersecurity, and IT domains. Built an IT 1–N prioritization framework, an assessment dashboard, and an IT
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
        portfolio teams. Coordinated FP&amp;A, Accounting, SOX, Agile Coaches, and developers, and negotiated with the
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
 * Testimonial section (empty for now)
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'If you’re exploring AI products, portfolio tools, or governance frameworks that people can trust—and that actually ship—I’d love to connect.',
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
    {
      type: ContactType.Github,
      text: 'github.com/mdavis119',
      href: 'https://github.com/mdavis119',
    },
    {
      type: ContactType.Instagram,
      text: '@megan',
      href: 'https://www.instagram.com',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/mdavis119' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/megrdavis/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com' },
];
