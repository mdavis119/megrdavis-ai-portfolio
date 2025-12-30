import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        {!!profileImageSrc && (
          <div className="flex-shrink-0">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutItems.map(({label, text, Icon}, idx) => (
            <li className="col-span-1 flex items-start gap-x-2" key={idx}>
              {Icon && <Icon className="h-5 w-5 text-white" />}
              <span className="text-sm font-bold text-white">{label}:</span>
              <span className="text-sm text-gray-300">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
