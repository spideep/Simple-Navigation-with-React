import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBitbucket, faFlickr, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div>
      <div className="profile_picture">
        <img alt="Alexis Rengifo picture" src="https://avatars1.githubusercontent.com/u/1041298?s=460&v=4" />
      </div>
      <h1>About</h1>
      <p>About page body content</p>
      <div className="external_links">
        <a href="https://www.linkedin.com/in/alexisrengifo/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/spideep">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://bitbucket.org/%7B27f8930f-90b8-4d07-a7aa-3ccea3245b25%7D/">
          <FontAwesomeIcon icon={faBitbucket} />
        </a>
        <a href="https://www.flickr.com/photos/spideep/albums">
          <FontAwesomeIcon icon={faFlickr} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=51960562373&text=Hey%20Alexis,%20lets%20talk">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <a href="mailto:alexisrengifo@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} /> alexisrengifo@gmail.com
      </a>

    </div>

  );
}

export default About;