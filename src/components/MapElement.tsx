import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';
import L from 'leaflet';
import { IpQuery } from '../App';
import useIpData from '../hooks/useIpData';
import { useEffect } from 'react';

import marker from '../assets/icon-location.svg'

export interface IpQueryProp {
	ipQuery: IpQuery;
}

interface LatLng {
	lat: number;
	lng: number;
}

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],     
})

const Map = ({ ipQuery }: IpQueryProp) => {
	const { center } = useIpData(ipQuery);

	const RecenterAutomatically = ({lat, lng}: LatLng) => {
		const map = useMap();
		 useEffect(() => {
		   map.setView([lat, lng])
		 }, [lat, lng]);
		 return null;
	   }

	if (!center) return <p></p>

	return (
		<div className='h-[60%] w-full absolute bottom-0 z-0'>
			<MapContainer center={center} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={center} icon={myIcon}></Marker>
				<RecenterAutomatically lat={center[0]} lng={center[1]} />
			</MapContainer>
		</div>
	);
};

export default Map;
