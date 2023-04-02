import { useState } from 'react';
import useWindowWide from './hooks/useWindowWidth';
import bgImgMobile from './assets/pattern-bg-mobile.png';
import bgImgDesktop from './assets/pattern-bg-desktop.png';

import './App.scss';
import SearchInput from './components/SearchInput';
import MapElement from './components/MapElement';
import IpInfo from './components/IpInfo';

function App() {
	const isWideScreen = useWindowWide(480);

	return (
		<main className='pt-10' style={{backgroundImage: `url(${isWideScreen ? bgImgDesktop : bgImgMobile})`}}>
      <h1 className='text-white text-center'>IP Address Tracker</h1>
      <SearchInput />
      <IpInfo />
      <MapElement />
		</main>
	);
}

export default App;
