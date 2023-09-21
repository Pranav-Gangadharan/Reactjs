import Tile from "./Tile";

function Dashborad() {

	let data = [
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
		<>
			<div className='container-fluid'>
				<div className='d-sm-flex align-items-center justify-content-between mb-4'>
					<h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
					<a
						href='#'
						className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
					>
						<i className='fas fa-download fa-sm text-white-50'></i> Generate
						Report
					</a>
				</div>

				<div className='row'>
					{
						data.map((e,i)=>{
							return <Tile color={e.color} icon={e.icon} title={e.title} isProgress={e.isProgress} value={e.value} key={i}/>
						})
					}
				
				</div>
			</div>
		</>
	);
}

export default Dashborad;
