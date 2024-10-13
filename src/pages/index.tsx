import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Research from '../components/Sections/About';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import Contact from '../components/Sections/Contact';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <Research />
      <Resume />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer /> */}
    </Page>
  );
});

export default Home;
