import React, { Fragment } from 'react';
import Control from 'react-leaflet-control';
import { Card } from 'antd';

const InfoBox = ({ current, data }) => {
	return (
		<Control position='topright'>
			<Card title='COVID-19 New Case Tracker' className='info'>
				{data ?
					<Fragment>
						<p>
							<strong className='state-name'>{current ? current.properties.name : ''}</strong>
							<span>{data.todayCases.toLocaleString()}</span>
						</p>
					</Fragment> : <p>Hover over state to see details</p>
				}
			</Card>
		</Control>
	)
};

export default InfoBox; 
