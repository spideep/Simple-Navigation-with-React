import React from 'react';
import './Gallery.scss';
import FlickPhotoset from '../FlickrPhotoset/FlickrPhotoset';

const Gallery = () => (
  <div className="Gallery">
    <FlickPhotoset photoset_id="72157623595640529"></FlickPhotoset>
    <FlickPhotoset photoset_id="72157619267683452"></FlickPhotoset>
    <FlickPhotoset photoset_id="72157619267747612"></FlickPhotoset>
    <FlickPhotoset photoset_id="72157636629533746"></FlickPhotoset>
    <FlickPhotoset photoset_id="72157658639295708"></FlickPhotoset>
    <FlickPhotoset photoset_id="72157626117809198"></FlickPhotoset>
  </div>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
