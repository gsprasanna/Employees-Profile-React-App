import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class GeoMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.apiKey
})(GeoMap);
