import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';
import classes from './Projects.module.css';
import github from '../images/github.png';
import axnf from '../images/axnf.jpeg';
import fl from '../images/cos.png';
import f2 from '../images/ad.png';
import JBM from '../images/JBM.png';
// Web projects
const webItem = [
  {
    link: 'https://axionfoam.com/',
    title: 'Axion',
    techStack: 'Tech Stack: React js, bootstrap, javascript, node js ,microsoft sql',
    desc: 'Axion is an e-commerce app for selling mattress online still under development..',
    image: axnf,
    color: '#D3D3D3',
    githubLink: 'https://github.com/chuzzy888/axionfoam-nigeria.git'
  },
  {
    link: 'https://jobme1.netlify.app/',
    title: 'JOBME',
    techStack: 'Tech Stack: React js, Tailwind css, javascript,firebase',
    desc: 'a confession site where users can share secrets and make confessions ',
    image: JBM,
    color: '#D3D3D3',
    githubLink: 'https://github.com/chuzzy888/JobMe.git'
  },
  {
    link: 'https://audionix.vercel.app/',
    title: 'Audionix',
    techStack: 'Tech Stack: React js, Tailwind css, javascript, TypeScript, Node js, Express js',
    desc: 'A live audio app for to host shows and join discussions ',
    image: f2,
    color: '#D3D3D3',
    githubLink: 'https://github.com/chuzzy888/Audionix.git'
  }
  // {
  //   link: 'https://confessionsite.netlify.app/',
  //   title: 'Confess.io',
  //   techStack: 'Tech Stack: React js, Tailwind css, javascript,firebase',
  //   desc: 'a confession site where users can share secrets and make confessions ',
  //   image: fl,
  //   color: '#D3D3D3',
  //   githubLink: 'https://github.com/chuzzy888/confession-site.git'
  // }
];

const androidAppItems = [];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img
              src={cardItem.image}
              className={classes.card__image}
              alt=''
              style={{ objectFit: 'contain' }}
            />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
            style={{ padding: '10px' }}
          >
            <h3
              className={classes.card__title}
              style={{
                color: 'white',
                backgroundColor: 'black',
                padding: '5px',
                marginTop: '8px',
                borderRadius: '5px'
              }}
            >
              {cardItem.title}
            </h3>

            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
          {/* <p
            className={classes.card__desc}
            style={{ fontSize: '13px ', textAlign: 'center', color: 'black', fontWeight: '900' }}
          >
            {cardItem.desc}
          </p>
          <p
            className={classes.card__techStack}
            style={{ fontSize: '10px ', textAlign: 'center', fontWeight: '900' }}
          >
            {cardItem.techStack}
          </p> */}
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>MY PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      <h2 className={classes.heading}></h2>
      <ul className={classes.cards}>
        {androidAppItems.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
