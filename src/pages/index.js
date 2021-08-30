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
          <img style = {{objectFit: 'contain', borderRadius: '50%', height: '70%', marginLeft: '200px'}} src = "data:image/png;base64,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"/>
          {/* <BgAnimation /> */}
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
