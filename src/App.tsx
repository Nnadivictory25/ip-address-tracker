import { useEffect, useState } from 'react';
import useWindowWide from './hooks/useWindowWidth';
import bgImgMobile from './assets/pattern-bg-mobile.png';
import bgImgDesktop from './assets/pattern-bg-desktop.png';

import axios from 'axios';
import SearchInput from './components/SearchInput';
import MapElement from './components/MapElement';
import IpInfo from './components/IpInfo';

import './App.scss';

export interface IpQuery {
  domain: string;
  ipAddress: string;
}

function App() {
	const isWideScreen = useWindowWide(650);
	const [ipQuery, setIpQuery] = useState<IpQuery>({} as IpQuery);

	return (
		<main
			className='pt-10'
			style={{
				backgroundImage: `url(${isWideScreen ? bgImgDesktop : bgImgMobile})`,
			}}>
			<h1 className='text-white text-center'>IP Address Tracker</h1>
			<SearchInput />
			<IpInfo ipQuery={ipQuery} />
			<MapElement ipQuery={ipQuery} />
		</main>
	);
}

export default App;
