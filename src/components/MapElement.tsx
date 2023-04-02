import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';

const Map = () => {
	return (
		<div className='h-[61%] w-[400px] lg:w-full absolute bottom-0'>
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[51.505, -0.09]}>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
