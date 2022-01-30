import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './Layout';
import * as Icons from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../App.css';

export function AboutMe() {
  library.add(Icons.faLinkedin, Icons.faTwitch, Icons.faTwitter, Icons.faGithub);

  return (
    <Layout>
      <div style={{ fontSize: '2rem' }}>
        <p>Hey there! 👋</p>
        <p>I'm Bernie (he/him). I'm currently living in Brooklyn, NY, USA.</p>
        <p>
          I describe myself as a
          {' '}
          <Link className="homeLink" to="/blog">storyteller</Link>
          , a
          {' '}
          <a href="https://www.youtube.com/watch?v=o4EeuVfzaVY" target="_blank" className="homeLink" rel="noreferrer">community</a>
          {' '}
          and
          {' '}
          <a href="https://twitch.tv/videos/487554756?t=18m30s" target="_blank" className="homeLink" rel="noreferrer">event organizer</a>
          , and as someone who excels at
          {' '}
          <a href="mailto:bern422@gmail.com" target="_blank" className="homeLink">building relationships.</a>
        </p>
        <p>
          I've worked professionally as a Software Engineer for the past 5+ years in the
          {' '}
          <a href="https://techcrunch.com/2017/04/28/yik-yak-shuts-down-after-square-paid-1-million-for-its-engineers/" target="_blank" className="homeLink" rel="noreferrer">social</a>
          ,
          {' '}
          <a href="https://blog.twitch.tv/en/2019/03/27/squad-stream-the-next-way-to-play-and-watch-together-32d9ad2ac555/" target="_blank" className="homeLink" rel="noreferrer">entertainment</a>
          , and
          {' '}
          <a target="_blank" href="https://blog.teacherspayteachers.com/introducing-easel-by-tpt/" className="homeLink" rel="noreferrer">education</a>
          {' '}
          spaces.
        </p>
        <p>
          Interested in hiring me? Interested in collaborating on a project? Anything else?
          {' '}
          <a href="mailto:bern422@gmail.com" target="_blank" className="homeLink">Get in touch!</a>
        </p>
        <p>
          If you're still curious to learn more, check out what I've been
          {' '}
          <a href="https://www.goodreads.com/user/show/19936007-bernie-marger" target="_blank" className="homeLink" rel="noreferrer">reading lately</a>
          , some of my go-to
          {' '}
          <a href="https://denver.eater.com/2012/4/6/6598567/heat-things-up-with-st-germain" target="_blank" className="homeLink" rel="noreferrer">cocktail recipes</a>
          , or one of my favorite
          {' '}
          <a href="https://www.youtube.com/watch?v=c1-Oep9uNwM" target="_blank" className="homeLink" rel="noreferrer">Youtube videos.</a>
        </p>
        <div className="socialContainer">
          <a className="socialLink" href="https://linkedin.com/in/berniemarger" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
          <a className="socialLink" href="https://twitter.com/berniemarger" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
          <a className="socialLink" href="https://twitch.tv/bern" target="_blank"><FontAwesomeIcon icon={['fab', 'twitch']}/></a>
          <a className="socialLink" href="https://github.com/bern" target="_blank"><FontAwesomeIcon icon={['fab', 'github']}/></a>
        </div>
      </div>
    </Layout>
  );
}
