import React from 'react';
import './Gallery.scss';
import FlickPhotoset from '../FlickrPhotoset/FlickrPhotoset';

const Gallery = () => (
  <div className="Gallery">
    <FlickPhotoset api_key="ca88703a9cf7d3f3d78b90306a3a80c5" user_id="11413095@N00" photoset_id="72157636629533746" limit={6}></FlickPhotoset>
    <FlickPhotoset api_key="ca88703a9cf7d3f3d78b90306a3a80c5" user_id="11413095@N00" photoset_id="72157623595640529" limit={6}></FlickPhotoset>
    <FlickPhotoset api_key="ca88703a9cf7d3f3d78b90306a3a80c5" user_id="11413095@N00" photoset_id="72157619267683452" limit={6}></FlickPhotoset>
    <FlickPhotoset api_key="ca88703a9cf7d3f3d78b90306a3a80c5" user_id="11413095@N00" photoset_id="72157619267747612" limit={6}></FlickPhotoset>
    <FlickPhotoset api_key="ca88703a9cf7d3f3d78b90306a3a80c5" user_id="11413095@N00" photoset_id="72157658639295708" limit={6}></FlickPhotoset>
    <FlickPhotoset api_key="ca88703a9cf7d3f3d78b90306a3a80c5" user_id="11413095@N00" photoset_id="72157619285112568" limit={6}></FlickPhotoset>
    <FlickPhotoset api_key="ca88703a9cf7d3f3d78b90306a3a80c5" user_id="11413095@N00" photoset_id="72157626117809198" limit={6}></FlickPhotoset>
  </div>
);

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
