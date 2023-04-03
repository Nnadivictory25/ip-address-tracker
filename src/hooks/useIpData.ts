import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { IpQuery } from '../App';
import { LatLngExpression, LatLngTuple } from 'leaflet';

interface IpDataFetch {
	ip: string;
	location: {
		country: string;
		region: string;
		city: string;
		lat: number;
		lng: number;
		postalCode: string;
		timezone: string;
		geonameId: number;
	};
	as: {
		asn: number;
		name: string;
		route: string;
		domain: string;
		type: string;
	};
	isp: string;
}

const useIpData = (ipQuery: IpQuery) => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
    const [center, setCenter] = useState<LatLngTuple>();

	useEffect(() => {
		const controller = new AbortController();

		axios
			.get<IpDataFetch>(
				'https://geo.ipify.org/api/v2/country,city?apiKey=at_ugsGupIKCK7iFCa1MXoX9C33AoW6w',
				{
					signal: controller.signal,
					params: {
						ipAddress: ipQuery?.ipAddress,
						domain: ipQuery?.domain,
					},
				}
			)
			.then((res) => {
				const { data } = res;
				setData(data);
				setIsLoading(false);
				setCenter([data.location.lat, data.location.lng]);
				console.log(data);
			})
			.catch((err) => {
				if (err.message !== 'canceled') {
					alert('something went wrong ' + err.message);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});

		return () => controller.abort();
	}, [ipQuery]);

	return { data, center, isLoading };
};

export default useIpData;
