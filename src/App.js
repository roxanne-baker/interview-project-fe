import React, { Component } from 'react';
import axios from 'axios';
import L from 'leaflet';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import statesData from './statesData';
import InfoBox from './InfoBox';
import Legend from './Legend';
import { getStateData, getStyleFn } from './util';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: null,
			data: null
		}
	}

	componentDidMount() {
		axios.get('https://corona.lmao.ninja/v3/covid-19/states').then(res => {
			this.setState({ data: res.data });
		});
	}

	highlightFeature = (e) => {
		const layer = e.target;
		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}
		this.setState({ current: layer.feature });
	}

	resetHighlight = (e) => {
		this.setState({ current: null });
	}

	zoomToFeature = (e) => {
		this.refs.map.leafletElement.fitBounds(e.target.getBounds());
	}

	onEachFeature = (feature, layer) => {
		layer.on({
			mouseover: this.highlightFeature,
			mouseout: this.resetHighlight,
			click: this.zoomToFeature
		});
	}

	render() {
		const { current, data } = this.state;
		return (
			<Map zoom={5} center={[37.8, -96]} ref='map'>
				<TileLayer
		      url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
		      attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors' />
				<GeoJSON ref='geojson' data={statesData} style={getStyleFn(current, data)} onEachFeature={this.onEachFeature}/>
				<InfoBox current={current} data={getStateData(current, data)} />
				<Legend />
			</Map>
	  );
	}
}

export default App;
