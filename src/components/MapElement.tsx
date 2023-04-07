import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';
import { IpQuery } from '../App';
import useIpData from '../hooks/useIpData';

export interface IpQueryProp {
	ipQuery: IpQuery;
}

const Map = ({ ipQuery }: IpQueryProp) => {
	const { center } = useIpData(ipQuery);

	return (
		<div className='h-[60%] w-full absolute bottom-0 z-0'>
			{center && (
				<MapContainer center={center} zoom={13} scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={center}></Marker>
				</MapContainer>
			)}
		</div>
	);
};

export default Map;
