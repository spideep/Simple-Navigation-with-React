import React from 'react';
import './FlickrPhotoset.scss';
import './../FlickGetInfo/FlickGetInfo';
import FlickGetInfo from './../FlickGetInfo/FlickGetInfo';

class FlickrPhotoset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photoset_title: null,
      user_id: null,
      api_key: null,
      items: []
    }
  }

  componentDidMount() {
    const api_key = this.props.api_key;
    const api_url = 'https://api.flickr.com/services/rest';
    const method = 'flickr.photosets.getPhotos';
    const user_id = this.props.user_id;
    const photoset_id = this.props.photoset_id;
    const format = 'json';
    const nojsoncallback = 1;
    let url = `${api_url}?method=${method}&api_key=${api_key}&user_id=${user_id}&photoset_id=${photoset_id}&format=${format}&nojsoncallback=${nojsoncallback}`;

    let myheaders = new Headers();
    myheaders.append("Content-Type", "application/json; charset=utf-8");
    myheaders.append("Accept", "application/json");

    let myrequest = new Request(url, {
      myheaders,
      mode: 'cors',
      cache: 'default',
    });

    fetch(myrequest)
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            items: data.photoset.photo,
            photoset_title: data.photoset.title
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
      .catch(console.log)
  }
  render() {
    const { error, isLoaded, items, photoset_title } = this.state;
    if (error) {
      return <div className="FlickrPhotoset">Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div className="FlickrPhotoset">Loading...</div>
    } else {
      return (
        <div className="FlickrPhotoset">
          <h3>{photoset_title}</h3>
          <ul>
            {items.slice(0, this.props.limit).map((item, i) => (
              <li key={item.id}>
                <FlickGetInfo photo_id={item.id} src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} title={item.title}></FlickGetInfo>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
};

FlickrPhotoset.propTypes = {};

FlickrPhotoset.defaultProps = {};

export default FlickrPhotoset;
