import { find } from 'lodash';

export const getStateData = (feature, data) => {
	if (feature) {
		const state = feature.properties.name;
		return find(data, ['state', state]);
	}
}

export const grades = [0, 50, 200, 500, 1000, 2000, 5000, 10000];

export const getColor = (d) => {
	return d > grades[7] ? '#800026' :
			d > grades[6]  ? '#BD0026' :
			d > grades[5]  ? '#E31A1C' :
			d > grades[4]  ? '#FC4E2A' :
			d > grades[3]   ? '#FD8D3C' :
			d > grades[2]   ? '#FEB24C' :
			d > grades[1]   ? '#FED976' :
						'#FFEDA0';
}

export const getStyleFn = (current, data) => (
	(feature) => {
		const fillOpacity = 0.7;
		const fillColor = getColor(data ? getStateData(feature, data).todayCases : 0);
		const opacity = 1;
		let weight, color, dashArray;
		if (current === feature) {
			weight = 5;
			color = '#666';
		} else {
			weight = 2;
			color = 'white';
			dashArray = '3';
		}
		return { weight, opacity, color, dashArray, fillOpacity, fillColor };
	}
);
