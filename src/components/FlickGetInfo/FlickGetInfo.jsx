import React, { useState } from 'react';
import './FlickGetInfo.scss';

const FlickGetInfo = props => {
  const [photoid, setPhotoid] = useState(props.photo_id);
  const [popupon, setPopupOn] = useState(false);

  const handleClick = ev => {
    ev.preventDefault();
    setPopupOn(true);
    window.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        setPopupOn(false);
      }
    })
  }

  const handleClose = ev => {
    ev.preventDefault();
    setPopupOn(false);
  }

  let popup;
  if (popupon) {
    popup =
      <div className="popup popup--getinfo">
        <div className="popup_content">
          <button onClick={handleClose} className="popup_close">X</button>
          <img src={props.src} alt={props.title} />
        </div>
      </div>
  } else {
    popup = "";
  }

  return (
    <div className="FlickGetInfo">
      <button
        href="#"
        onClick={handleClick}
        dataid={photoid}
        className="item-label">
        {props.title}
      </button>
      {popup}
    </div>
  )
};

FlickGetInfo.propTypes = {};

FlickGetInfo.defaultProps = {};

export default FlickGetInfo;
