
import heroImage from '../images/background.jpg';
import profilepic from '../images/Avatar.jpg';
import {
  Research,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hanfei Guo',
  description: "Hanfei Guo's Homepage",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'About',
  Research: 'research',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'Activities',
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
  name: `Hanfei Guo | 郭函菲`,
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
  aboutme: {
    profileImageSrc: profilepic,
    description: (
      <>
        <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          I am a postdoc at <a className='text-white' href="https://scms.fudan.edu.cn">Shanghai Center for Mathematical Sciences</a>. Before that, I obtained my Ph.D. in mathematics at Peking University in 2023, supervised by <a className='text-white' href="http://faculty.bicmr.pku.edu.cn/~qizheng/#"><strong className="text-stone-100">Prof. Qizheng Yin</strong></a>. 
        </div>
      </>
    ),
    aboutItems: [
      // {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
      // {label: 'Age', text: '29', Icon: CalendarIcon},
      // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
      // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
      // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
      // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
    ],
  }
};

/**
 * About section
 */
// export const aboutData: About = {
//   profileImageSrc: profilepic,
//   description: (
//   <>
//   Use this bio section as your way of describing yourself and saying what you do, what technologies you like
//   to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
//   in.
//   </>
//   ),
//   aboutItems: [
//     {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
//     {label: 'Age', text: '29', Icon: CalendarIcon},
//     {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
//     {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
//     {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
//     {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
//   ],
// };

/**
 * Research section
 */
export const ResearchData: Research = {
  description: (
    <>
      My research interest is in algebraic geometry. Specifically, I'm mainly focused on the geometry of hyper-Kähler varieties, coherent sheaves, derived categories and moduli spaces. 
    </>
  ),
  publicationItems: [
    {
      title: "Atomic sheaves on hyper-Kähler manifolds via Bridgeland moduli spaces",
      colaborators: "Zhiyu Liu",
      arxivid: "2406.19361",
      year: "2024",
      preprintinfo: "",
    },
    {
      title: "Lagrangian families of Bridgeland moduli spaces from Gushel–Mukai fourfolds and double EPW cubes",
      colaborators: "Soheyla Feyzbakhsh, Zhiyu Liu and Shizhuo Zhang",
      arxivid: "2404.11598",
      year: "2024",
      preprintinfo: "",
    },
    {
      title: "Conics on Gushel–Mukai fourfolds, EPW sextics and Bridgeland moduli spaces",
      colaborators: "Zhiyu Liu and Shizhuo Zhang",
      arxivid: "2203.05442",
      year: "2022",
      preprintinfo: " To appear in Math. Res. Lett.,",
    },
  ]
}

/**
 * Skills section
 */
// export const skills: SkillGroup[] = [
//   {
//     name: 'Spoken languages',
//     skills: [
//       {
//         name: 'English',
//         level: 10,
//       },
//       {
//         name: 'French',
//         level: 4,
//       },
//       {
//         name: 'Spanish',
//         level: 3,
//       },
//     ],
//   },
//   {
//     name: 'Frontend development',
//     skills: [
//       {
//         name: 'React',
//         level: 9,
//       },
//       {
//         name: 'Typescript',
//         level: 7,
//       },
//       {
//         name: 'GraphQL',
//         level: 6,
//       },
//     ],
//   },
//   {
//     name: 'Backend development',
//     skills: [
//       {
//         name: 'Node.js',
//         level: 8,
//       },
//       {
//         name: 'Rust',
//         level: 5,
//       },
//       {
//         name: 'Golang',
//         level: 4,
//       },
//     ],
//   },
//   {
//     name: 'Mobile development',
//     skills: [
//       {
//         name: 'React Native',
//         level: 9,
//       },
//       {
//         name: 'Flutter',
//         level: 4,
//       },
//       {
//         name: 'Swift',
//         level: 3,
//       },
//     ],
//   },
// ];

/**
 * Portfolio section
 */
// export const portfolioItems: PortfolioItem[] = [
//   {
//     title: 'Project title 1',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage1,
//   },
//   {
//     title: 'Project title 2',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage2,
//   },
//   {
//     title: 'Project title 3',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage3,
//   },
//   {
//     title: 'Project title 4',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage4,
//   },
//   {
//     title: 'Project title 5',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage5,
//   },
//   {
//     title: 'Project title 6',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage6,
//   },
//   {
//     title: 'Project title 7',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Project title 8',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage8,
//   },
//   {
//     title: 'Project title 9',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Project title 10',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage10,
//   },
//   {
//     title: 'Project title 11',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage11,
//   },
// ];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
// export const education: TimelineItem[] = [
//   {
//     date: 'April 2007',
//     location: 'Clown college',
//     title: 'Masters in Beer tasting',
//     content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
//   },
//   {
//     date: 'March 2003',
//     location: 'School of Business',
//     title: 'What did you study 101',
//     content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
//   },
// ];

export const Talks: TimelineItem[] = [
  {
    date: 'January, 2024',
    location: 'Conference on Fano and hyper-Kähler varieties, University of Genova',
    title: 'Introduction to modular sheaves on hyper-Kähler varieties',
    content: <p></p>,
  },
  {
    date: 'November, 2023',
    location: 'Autumn Algebraic Geometry Seminar, University of Science and Technology of China',
    title: 'Cubic fourfolds, hyper-Kähler varieties and atomic Lagrangians',
    content: <p></p>,
  },
  {
    date: 'October, 2023',
    location: 'BIMSA-YMSC Algebraic Geometry Seminar, Tsinghua University',
    title: 'Cubic fourfolds, hyper-Kähler varieties and atomic Lagrangians',
    content: <p></p>,
  },
  {
    date: 'November, 2023',
    location: 'Banff Hangzhou workshop on Geometry of hyper-Kähler Varieties, Zhejiang University',
    title: 'Fano fourfolds, hyper-Kähler varieties and Lagrangians',
    content: <p></p>,
  },
  {
    date: 'May, 2023',
    location: 'Mini-workshop on geometry, Tsinghua University',
    title: 'Fano fourfolds, hyper-Kähler varieties and atomic Lagrangians',
    content: <p></p>,
  },
  {
    date: 'July, 2022',
    location: '3rd National Algebraic Geometry Conference, Fudan University',
    title: 'Conics on Gushel–Mukai fourfolds, EPW sextics and Bridgeland moduli spaces',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact Info',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'hfguo@fudan.edu.cn / hanfeiguo23@gmail.com',
      href: 'mailto:hfguo@fudan.edu.cn',
    },
    {
      type: ContactType.Location,
      text: 'SCMS, Fudan University, Room 339-341, 2005 Songhu Road, Shanghai, China',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
// export const socialLinks: Social[] = [
//   {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
//   {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
//   {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
//   {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
//   {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
// ];
