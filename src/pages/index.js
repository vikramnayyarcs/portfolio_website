import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Vikram Nayyar CS Portolio</title>
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Timeline />
        <Technologies />
        <Projects />        
        {/* <Acomplishments /> */}
      </Layout>
    </>
    
  );
};

export default Home;
