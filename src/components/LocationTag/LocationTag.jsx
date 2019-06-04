import React from 'react';
import './LocationTag.scss';

const LocationTag = ({ name }) => (
	<div className="LocationTag">
		<p>{name}</p>
    <div className="LocationTag-down"></div>
	</div>
);

export default LocationTag;
