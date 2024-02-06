import { useState, useEffect } from 'react';
import axios from 'axios';
import { IProductionLog } from '../interfaces';

const useGetProductionLogs = () => {
	const [productionLogData, setProductionLogData] = useState<{
		productionLogs: {
			threeM: {
				productionLogs: IProductionLog[];
				total: number;
			};
			ultraGrip: {
				productionLogs: IProductionLog[];
				total: number;
			};
		};
	} | null>(null);

	// const [filter, setFilter] = useState<FilterType>({ dateRange: null });
	// const [sort, setSort] = useState<string | undefined>(undefined);
	const [page, setPage] = useState<number | undefined>(undefined);

	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const [refreshToggle, setRefreshToggle] = useState(false);

	useEffect(() => {
		const getProductionLogs = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await axios.get(`${import.meta.env.VITE_API_URL}/production/logs`, {
					params: {
						page,
					},
					withCredentials: true,
				});

				const data = response.data;

				setProductionLogData({
					productionLogs: {
						threeM: data.threeM,
						ultraGrip: data.ultraGrip,
					},
				});
			} catch (err) {
				if (axios.isAxiosError(err)) {
					setError(err.response?.data?.message || 'An error occurred');
				} else {
					setError('An error occurred');
				}
			} finally {
				setLoading(true);
			}
		};

		getProductionLogs();
	}, [page, refreshToggle]);

	const refreshProductionLogs = () => {
		setRefreshToggle((prev) => !prev);
	};

	return {
		productionLogData,
		setPage,
		loading,
		error,
		refreshProductionLogs,
	};
};

export default useGetProductionLogs;
