/* eslint-disable */
import { useEffect, useState } from 'react';
import ComboChart from '../charts/ComboChart';
import { LineChart } from '..';
import { useGeneralContext } from '../../hooks/useGeneralContext';
import { IProductionLog } from '../../interfaces';

type Props = {
	mode: string;
	toggleOverviewMode: () => void;
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
};

const OverviewContent = ({ mode, toggleOverviewMode, productionLogs }: Props) => {
	const { state } = useGeneralContext();
	const [activeSection, setActiveSection] = useState(1);

	const getLastFourWeeks = (logs: IProductionLog[]) => {
		return logs.slice(-5, -1);
	};

	const getActualToQuoted = (lastFourWeeks: IProductionLog[]) => {
		return lastFourWeeks.map((log) => (log.properties.actualHours || 0) / (log.properties.quotedHours || 1));
	};

	const getIndirectToTotal = (lastFourWeeks: IProductionLog[]) => {
		return lastFourWeeks.map((log) => (log.properties.indirectHours || 0) / (log.properties.totalHours || 1));
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		interaction: {
			mode: 'nearest' as const,
			axis: 'x' as const,
			intersect: false,
		},
	};

	const dataSets = {
		threeM: {
			output: {
				labels: getLastFourWeeks(productionLogs.threeM.productionLogs).map((log) => log.weekOf) || [],
				datasets: [
					{
						type: 'line',
						label: 'Goal',
						data: getLastFourWeeks(productionLogs.threeM.productionLogs).map((log) => log.properties.outputGoal) || [],
						backgroundColor: 'transparent',
						borderColor: '#000000',
						borderWidth: 2,
						borderDash: [5, 5],
						tension: 0.4,
						pointBackgroundColor: 'white',
						pointBorderWidth: 2,
						fill: false,
					},
					{
						type: 'bar',
						label: 'Projected',
						data:
							getLastFourWeeks(productionLogs.threeM.productionLogs).map((log) => log.properties.projectedOutput) || [],
						backgroundColor: '#e5e7eb',
						borderColor: '#9ca3af',
						borderWidth: 2,
						tension: 0.4,
						pointBackgroundColor: 'white',
						pointBorderWidth: 2,
						fill: true,
					},
					{
						type: 'bar',
						label: 'Actual',
						data:
							getLastFourWeeks(productionLogs.threeM.productionLogs).map((log) => log.properties.actualOutput) || [],
						backgroundColor: '#93c5fd',
						borderColor: '#3b82f6',
						borderWidth: 2,
						tension: 0.4,
						pointBackgroundColor: 'white',
						pointBorderWidth: 2,
						fill: true,
					},
				],
			},
			quotedHours: {
				labels: getLastFourWeeks(productionLogs.threeM.productionLogs).map((log) => log.weekOf) || [],
				datasets: [
					{
						type: 'line',
						label: 'Goal',
						data: getLastFourWeeks(productionLogs.threeM.productionLogs).map(() => 1) || [],
						backgroundColor: 'transparent',
						borderColor: '#000000',
						borderWidth: 2,
						borderDash: [5, 5],
						spanGaps: true,
						fill: false,
					},
					{
						type: 'bar',
						label: 'Actual : Quoted',
						data: getActualToQuoted(getLastFourWeeks(productionLogs.threeM.productionLogs)) || [],
						backgroundColor: '#93c5fd',
						borderColor: '#3b82f6',
						borderWidth: 2,
						tension: 0.4,
						fill: false,
					},
				],
			},
			indirectHours: {
				labels: getLastFourWeeks(productionLogs.threeM.productionLogs).map((log) => log.weekOf) || [],
				datasets: [
					{
						type: 'bar',
						label: 'Indirect : Total',
						data: getIndirectToTotal(getLastFourWeeks(productionLogs.threeM.productionLogs)) || [],
						backgroundColor: '#93c5fd',
						borderColor: '#3b82f6',
						borderWidth: 2,
						tension: 0.4,
						fill: false,
					},
				],
			},
		},
		ultraGrip: {
			output: {
				labels: getLastFourWeeks(productionLogs.ultraGrip.productionLogs).map((log) => log.weekOf) || [],
				datasets: [
					{
						type: 'line',
						label: 'Goal',
						data:
							getLastFourWeeks(productionLogs.ultraGrip.productionLogs).map((log) => log.properties.outputGoal) || [],
						backgroundColor: 'transparent',
						borderColor: '#000000',
						borderWidth: 2,
						borderDash: [5, 5],
						tension: 0.4,
						pointBackgroundColor: 'white',
						pointBorderWidth: 2,
						fill: false,
					},
					{
						type: 'bar',
						label: 'Projected',
						data:
							getLastFourWeeks(productionLogs.ultraGrip.productionLogs).map((log) => log.properties.projectedOutput) ||
							[],
						backgroundColor: '#e5e7eb',
						borderColor: '#9ca3af',
						borderWidth: 2,
						tension: 0.4,
						pointBackgroundColor: 'white',
						pointBorderWidth: 2,
						fill: true,
					},
					{
						type: 'bar',
						label: 'Actual',
						data:
							getLastFourWeeks(productionLogs.ultraGrip.productionLogs).map((log) => log.properties.actualOutput) || [],
						backgroundColor: '#fca5a5',
						borderColor: '#ef4444',
						borderWidth: 2,
						tension: 0.4,
						pointBackgroundColor: 'white',
						pointBorderWidth: 2,
						fill: true,
					},
				],
			},
			quotedHours: {
				labels: getLastFourWeeks(productionLogs.ultraGrip.productionLogs).map((log) => log.weekOf) || [],
				datasets: [
					{
						type: 'line',
						label: 'Goal',
						data: getLastFourWeeks(productionLogs.ultraGrip.productionLogs).map(() => 1) || [],
						backgroundColor: 'transparent',
						borderColor: '#000000',
						borderWidth: 2,
						borderDash: [5, 5],
						spanGaps: true,
						fill: false,
					},
					{
						type: 'bar',
						label: 'Actual : Quoted',
						data: getActualToQuoted(getLastFourWeeks(productionLogs.ultraGrip.productionLogs)) || [],
						backgroundColor: '#fca5a5',
						borderColor: '#ef4444',
						borderWidth: 2,
						tension: 0.4,
						fill: false,
					},
				],
			},
			indirectHours: {
				labels: getLastFourWeeks(productionLogs.ultraGrip.productionLogs).map((log) => log.weekOf) || [],
				datasets: [
					{
						type: 'bar',
						label: 'Indirect : Total',
						data: getIndirectToTotal(getLastFourWeeks(productionLogs.ultraGrip.productionLogs)) || [],
						backgroundColor: '#fca5a5',
						borderColor: '#ef4444',
						borderWidth: 2,
						tension: 0.4,
						fill: false,
					},
				],
			},
		},
	};

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && state.displayMode === 'production-display') {
				toggleOverviewMode();
			}
		};

		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [mode, toggleOverviewMode]);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSection((prevActiveSection) => (prevActiveSection === 1 ? 2 : 1));
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	// useEffect(() => {
	// 	parseCSVToJson('/data/downtime.csv')
	// 		.then((jsonData) => {
	// 			const weeklyTotals: WeeklyTotal[] = totalByWeek(jsonData);

	// 			weeklyTotals.sort((a, b) => a.weekEnd.localeCompare(b.weekEnd));

	// 			const lastFiveWeeks = weeklyTotals.slice(-5);
	// 			const lastFourWeeks = lastFiveWeeks.slice(0, 4);

	// 			setDowntimeData(lastFourWeeks.map((wt) => wt.total / 60));
	// 			setDowntimeLabels(lastFourWeeks.map((wt) => wt.weekEnd));
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

	const renderOverview = () => (
		<div className="flex flex-col gap-4">
			<div className="bg-white rounded-lg p-4 h-[500px] shadow-md">
				<LineChart title="Weekly Shipments" data={dataSets.threeM.output} options={options} />
			</div>
			{/* <div className="bg-white rounded-lg p-4 h-[500px] shadow-md">
				<ComboChart title="Unscheduled Downtime (Hours)" data={dataSets.threeM.downtime} options={options} />
			</div> */}
			<div className="bg-white rounded-lg p-4 h-[500px] shadow-md">
				<ComboChart title="Actual : Quoted (Hours)" data={dataSets.threeM.quotedHours} options={options} />
			</div>
			<div className="bg-white rounded-lg p-4 h-[500px] shadow-md">
				<ComboChart title="Indirect : Total (Hours)" data={dataSets.threeM.indirectHours} options={options} />
			</div>
		</div>
	);

	const renderDisplay = () => (
		<div className="fixed inset-0 z-50 flex flex-col gap-4 h-screen w-full p-4 bg-gray-100">
			{activeSection === 1 && (
				<>
					<h1 className="text-center font-semibold text-2xl">Three M Tool & Machine</h1>
					<div className="flex gap-4 h-1/2">
						<div className="flex-1 bg-white rounded-lg p-4 shadow-md">
							<ComboChart title="Weekly Shipments" data={dataSets.threeM.output} options={options} />
						</div>
						<div className="flex-1 bg-white rounded-lg p-4 shadow-md text-gray-400 flex items-center justify-center flex-col">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="h-28">
								<path d="M224,64H32A16,16,0,0,0,16,80v72a16,16,0,0,0,16,16H56v32a8,8,0,0,0,16,0V168H184v32a8,8,0,0,0,16,0V168h24a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,64.69L175.31,80H224ZM80.69,80l72,72H103.31L32,80.69V80ZM32,103.31,80.69,152H32ZM224,152H175.31l-72-72h49.38L224,151.32V152Z"></path>
							</svg>
							<h1 className="text-gray-800 text-xl font-semibold">Under Construction</h1>
						</div>
					</div>
					<div className="flex gap-4 h-1/2">
						<div className="flex-1 bg-white rounded-lg p-4 shadow-md">
							<ComboChart title="Actual : Quoted (Hours)" data={dataSets.threeM.quotedHours} options={options} />
						</div>
						<div className="flex-1 bg-white rounded-lg p-4 shadow-md">
							<ComboChart title="Indirect : Total (Hours)" data={dataSets.threeM.indirectHours} options={options} />
						</div>
					</div>
				</>
			)}

			{activeSection === 2 && (
				<>
					<h1 className="text-center font-semibold text-2xl">Ultra Grip International</h1>
					<div className="flex gap-4 h-1/2">
						<div className="flex-1 bg-white rounded-lg p-4 shadow-md">
							<ComboChart title="Weekly Shipments" data={dataSets.ultraGrip.output} options={options} />
						</div>
						<div className="flex-1 bg-white rounded-lg p-4 shadow-md text-gray-400 flex items-center justify-center flex-col">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" className="h-28">
								<path d="M224,64H32A16,16,0,0,0,16,80v72a16,16,0,0,0,16,16H56v32a8,8,0,0,0,16,0V168H184v32a8,8,0,0,0,16,0V168h24a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm0,64.69L175.31,80H224ZM80.69,80l72,72H103.31L32,80.69V80ZM32,103.31,80.69,152H32ZM224,152H175.31l-72-72h49.38L224,151.32V152Z"></path>
							</svg>
							<h1 className="text-gray-800 text-xl font-semibold">Under Construction</h1>
						</div>
					</div>
					<div className="flex gap-4 h-1/2">
						<div className="flex-1 bg-white rounded-lg p-4 shadow-md">
							<ComboChart title="Actual : Quoted (Hours)" data={dataSets.ultraGrip.quotedHours} options={options} />
						</div>
						<div className="flex-1 bg-white rounded-lg p-4 shadow-md">
							<ComboChart title="Indirect : Total (Hours)" data={dataSets.ultraGrip.indirectHours} options={options} />
						</div>
					</div>
				</>
			)}
		</div>
	);

	const renderContent = () => {
		switch (state.displayMode) {
			case 'general':
				return renderOverview();
			case 'production-display':
				return renderDisplay();
			default:
				return <div>Mode not found</div>;
		}
	};

	return renderContent();
};

export default OverviewContent;
