import React, { Fragment } from 'react';

import { Panel, PanelHeader, Group, Div, Button, FixedLayout, Avatar } from '@vkontakte/vkui';

import './Intro.css';

const Intro = ({ id, go, route, fetchedUser, userHasSeenIntro }) => (
	<Panel id={id} centered={true}>
		<PanelHeader><h1>Туалетка</h1></PanelHeader>
		{(fetchedUser && !userHasSeenIntro) &&
			<Fragment>
				<Group>
					<Div className='user'>
						{fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						<h2>Привет, {fetchedUser.first_name}</h2>
						<h3>Этот сервис помогает следить за тем, чтобы туалетная бумага дома не заканчивалась и ты не попал в неловкую ситуацию, когда ее не окажется в самый нужный момент.</h3>
					</Div>
				</Group>
				<FixedLayout vertical='bottom'>
					<Div>
						<Button mode='commerce' size="xl" level="2" onClick={() => go(route)}>
							ОК, всё понятно
						</Button>
					</Div>
				</FixedLayout>
			</Fragment>
		}
	</Panel>
);
export default Intro;
