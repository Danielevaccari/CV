import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Project = ({ image, description, href, technology, alt, id }) => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [offTop, setOffTop] = useState(0);
  const [offLeft, setOffLeft] = useState(0);
  const [height, setHeigth] = useState(null);
  const [width, setWidth] = useState(null);
  const [hovered, setHovered] = useState(false);

  const element = document.getElementById(id);

  const platformOffset = (e) => {
    setX(e.pageX - offLeft);
    setY(e.pageY - offTop);
    setOffTop(document.getElementById(id).offsetTop);
    setOffLeft(document.getElementById(id).offsetLeft);
    setContainerHeightWidth();
    setHovered(true);
    styleStringModify();
  };

  const setContainerHeightWidth = () => {
    if (element) {
      setHeigth(element.offsetHeight);
      setWidth(element.clientWidth);
    }
  };

  const styleStringModify = () => {
    if (hovered) {
      // eslint-disable-next-line max-len
      element.style.transform = 'perspective(500px) scale(1.08) rotateX(' + -20 * ((y - height / 2) / height) + 'deg) rotateY(' + 20 * ((x - width / 2) / width) + 'deg)';
    }
  };

  const resetTilting = () => {
    // eslint-disable-next-line max-len
    element.style.transform = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg) skewy(-5deg)';
  };

  return (
    <div className='personal-projects-row'>
      <div className='personal-projects-row__left'>
        <span className='personal-projects-description'>
          {description}
        </span>
        <span className='personal-projects-description-footer'>
          {technology.map((image, index) => {
            return (
              <img
                src={image}
                className='personal-projects-description-footer-image'
                key={image}>
              </img>
            );
          })}
        </span>
      </div>
      <div className='personal-projects-row__right'>
        <a style={{ textDecoration: 'none' }} href={href} className='jj'>
          <img
            id={id}
            className='personal-projects-image'
            src={image}
            alt={alt}
            onMouseMove={(e) => platformOffset(e)}
            onMouseOut={() => setHovered(false)}
            onMouseLeave={() => resetTilting()}
          >
          </img>
        </a>
      </div>
    </div >
  );
};

Project.defaultProps = {
  image: {},
  description: 'Description not found',
  href: '',
  technology: [],
  alt: '',
  id: '',
};

Project.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  technology: PropTypes.array,
  alt: PropTypes.string,
  id: PropTypes.string,
};

export default Project;
