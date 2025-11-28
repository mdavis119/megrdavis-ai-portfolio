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
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
        My background spans AI & automation, SaaS product ownership, IT intake and engagement, digital supplier
        ecosystems, and a $500M retail portfolio. I love turning complex, messy systems into clear, human-centered
        products that teams actually want to use.
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
  description: `Senior Technical Product Manager who thrives at the intersection of technology, strategy, and human impact. I build AI products, portfolio frameworks, and enablement programs that make work simpler, smarter, and safer—while staying grounded in compliance, financial rigor, and real business outcomes.`,
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
 * Levels are 1–10 and only used for the visual bars.
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
      { name: 'Cross-Functional Leadership', l
