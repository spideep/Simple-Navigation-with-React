import React from 'react';
import './FlickrPhotoset.scss';

class FlickrPhotoset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photoset_title: null,
      items: []
    }
  }

  componentDidMount() {
    const api_key = 'ca88703a9cf7d3f3d78b90306a3a80c5';
    const api_url = 'https://api.flickr.com/services/rest';
    const method = 'flickr.photosets.getPhotos';
    const user_id = '11413095@N00';
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
            {items.map(item => (
              <li key={item.id}>
                {item.title}
                <br />
                <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt="" />
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
