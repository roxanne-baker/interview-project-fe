import React from 'react';
import Control from 'react-leaflet-control';
import { Card } from 'antd';
import { map } from 'lodash';
import { grades, getColor } from './util';

const Legend = () => {
	return (
		<Control position='bottomright'>
			<Card className='legend'>
				{ map(grades, (grade, index) => {
					const last = !grades[index + 1];
					const from = `${grade.toLocaleString()}${last ? '+' : ''}`;
					const to = last ? '' : `- ${grades[index + 1].toLocaleString()}`;
					return (
						<p>
							<i style={{ background: getColor(grade + 1) }}></i>
							<span>{`${from} ${to}`}</span>
						</p>
					);
				})}
			</Card>
		</Control>
	);
};

export default Legend;
