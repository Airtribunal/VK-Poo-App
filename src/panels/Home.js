import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import Sliders from '../components/Sliders';


import './Home.css';

const Home = ({ id, snackbarError, fetchedState }) => {

	return (
		<Panel id={id}>
			<PanelHeader>Туалетка</PanelHeader>
			{fetchedState && <Sliders fetchedState={fetchedState} snackbarError={snackbarError} />}
		</Panel>
	);
};

export default Home;
