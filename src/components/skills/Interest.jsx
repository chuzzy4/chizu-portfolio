import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE MY EXPERTISE</h2>
      <div className={classes.Interest}>
        {/* <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        {/* <div className={classes.web}>
          <h3>APP Develpoment</h3>
          <p>
            I have knowledge of flutter development and have experience in building android and IOS
            applications. I also have live projects published on Google Play Store.
          </p>
        </div> */}
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.app}>
          <h3>Web Development</h3>
          <p>
            Javascript/ Typescript, HTML/ CSS, ReactJs, Next.js, Tailwind CSS, UI Libraries,Node js
            (React-Bootstrap, Shadcn UI), Redux Toolkit.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.other}>
          <h3>Expanded Expertise</h3>
          <p>
            Git, GitHub, Frontend System Design,Mongo Db, Node.js,Express js,firebase , supabase,
            Open Source Contribution.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
}
