// import classNames from 'classnames';
// import Image from 'next/image';
import {FC, memo} from 'react';

import {ResearchData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Research: FC = memo(() => {
  const {description, publicationItems} = ResearchData;
  
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Research}>
    
      <div className="relative flex w-full flex  flex-col gap-y-2 pb-9">
        <h2 className="text-3xl font-bold text-white flex items-center justify-center md:justify-start">Research</h2>
        <div className="prose prose-lg text-gray-300 max-w-full font-bold sm:prose-lg">{description}</div>
      </div>

      <div className='flex-col divide-y-2 divide-neutral-300'>
        <h2 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start">Publication & Preprints</h2>
        <div>
          <ul className='list-disc col-span-1 flex flex-col gap-y-4 first:pt-2'>
            {publicationItems.map(({title, colaborators, arxivid, year, preprintinfo, printinfo, url}, idx) => {

                const arxivurl=`https://arxiv.org/abs/${arxivid}`
                year = year;
                if (printinfo == "")
                  return (
                    <li key={idx}>
                      {/* <p> */}
                        <div className='prose text-lg text-gray-300 text-neutral-800 text-white max-w-full'>
                        <a className='prose text-lg text-gray-300 text-neutral-800 text-white max-w-full' href={arxivurl}>{title}</a>.{preprintinfo} arXiv: <span className='italic text-neutral-800 text-white'>{arxivid}</span>.
                        </div>
                      {/* </p> */}
                      <span className='text-white prose prose-base'>with</span> <span className="flex-1 prose-base font-medium text-neutral-800 text-white italic sm:flex-none"> {colaborators}</span>
                    </li>
                  )
                  else
                    return (
                      <li key={idx}>
                        {/* <p> */}
                          <div className='prose text-lg text-gray-300 text-neutral-800 text-white max-w-full'>
                          <a className='prose text-lg text-gray-300 text-neutral-800 text-white max-w-full' href={url}>{title}</a>. {printinfo}.
                          </div>
                        {/* </p> */}
                        <span className='text-white prose prose-base'>with</span> <span className="flex-1 prose-base font-medium text-neutral-800 text-white italic sm:flex-none"> {colaborators}</span>
                      </li>
                    )
              }
            )}
          </ul>
        </div>
      </div>

      {/* <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </Section>
  );
});

Research.displayName = 'About';
export default Research;
