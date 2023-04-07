import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { IpQuery } from '../App';
import { LatLngExpression, LatLngTuple } from 'leaflet';

interface IpDataFetch {
	ip: string;
	city: string;
	region: string;
	region_code: string;
	country_name: string;
	country_code: string;
	latitude: number;
	longitude: number;
	postal: string | null;
	asn: {
		asn: string;
		name: string;
		domain: string | null;
	};
	time_zone: {
		name: string;
		abbr: string;
		offset: string;
	}
}

const useIpData = (ipQuery: IpQuery) => {
	const [data, setData] = useState<IpDataFetch>({} as IpDataFetch);
	const [isLoading, setIsLoading] = useState(true);
	const [center, setCenter] = useState<LatLngTuple>();

	useEffect(() => {
		const controller = new AbortController();

		axios
			.get<IpDataFetch>(
				'https://api.ipdata.co?api-key=5487fe827551d1c9bfba54537f7d2b3a3b93ae4c1fa946dea43a417b',
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
				setCenter([data.latitude, data.longitude]);
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
