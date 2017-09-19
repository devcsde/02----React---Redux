import React, {Component} from "react";

class GoogleMap extends Component {
  componentDidMount() {
    new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // define this.refs.map to pass it around
    return <div ref="map" />;
  }
}

export default GoogleMap;