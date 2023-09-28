import React from 'react';
export const DashboardDataContext = React.createContext(null);
function DashboardContext({ children }) {
	let dashboardData = [
		{
			color: 'primary',
			icon: 'fa-calendar',
			title: 'Earnings(Monthly)',
			value: '$40,000',
		},
		{
			color: 'success',
			icon: 'fa-dollar-sign',
			title: 'Earnings(Annual)',
			value: '$2,25,000',
		},
		{
			isProgress: true,
			color: 'info',
			icon: 'fa-clipboard-list',
			title: 'Tasks',
			value: '90',
		},
		{
			color: 'warning',
			icon: 'fa-comments',
			title: 'Tasks',
			value: '$2,25,000',
		},
		{
			isProgress: true,
			color: 'danger',
			icon: 'fa-clipboard-list',
			title: 'declined',
			value: '10',
		},
	];

	return (
		<DashboardDataContext.Provider value={{ dashboardData }}>
			{children}
		</DashboardDataContext.Provider>
	);
}

export default DashboardContext;
