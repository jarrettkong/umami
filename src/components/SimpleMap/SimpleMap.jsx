import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationTag from '../LocationTag/LocationTag';
import './SimpleMap.scss';

class SimpleMap extends Component {
	render() {
		return (
			<div className="SimpleMap">
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
					defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
          defaultZoom={16}
          yesIWantToUseGoogleMapApiInternals
				>
					<LocationTag lat={this.props.lat} lng={this.props.lng} name={this.props.name} />
				</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
