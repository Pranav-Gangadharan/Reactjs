import { Link } from 'react-router-dom';
import '../index.css';

function Sidebar() {
	return (
		<>
			<ul
				className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
				id='accordionSidebar'
			>
				{/* <!-- Sidebar - Brand --> */}
				<a
					className='sidebar-brand d-flex align-items-center justify-content-center'
					href='/'
				>
					<div className='sidebar-brand-icon rotate-n-15'>
						<i className='fas fa-laugh-wink'></i>
					</div>
					<div className='sidebar-brand-text mx-3'>
						SB Admin <sup>2</sup>
					</div>
				</a>

				{/* <!-- Divider --> */}
				<hr className='sidebar-divider my-0' />

				{/* <!-- Nav Item - Dashboard --> */}
				<li className='nav-item'>
					<div className='nav-link' href='javascript(void)'>
						<Link to={'/dashboard'}>
							<i className='fas fa-fw fa-tachometer-alt'></i>
							<span style={{ color: 'white', textDecoration: 'none' }}>
								Dashboard
							</span>
						</Link>
					</div>
				</li>

				{/* <!-- Divider --> */}
				<hr className='sidebar-divider' />

				{/* <!-- Heading --> */}
				<div className='sidebar-heading'>Interface</div>

				{/* <!-- Nav Item - Pages Collapse Menu --> */}
				<li className='nav-item'>
					<div className='nav-link collapsed'>
						<Link to={'/create'}>
							<i className='fas fa-fw fa-cog'></i>
							<span style={{ color: 'white', textDecoration: 'none' }}>
								Add User
							</span>
						</Link>
					</div>
				</li>

				{/* <!-- Nav Item - Utilities Collapse Menu --> */}
				<li className='nav-item'>
					<div className='nav-link collapsed'>
						<Link to={'/nested'}>
							<i className='fas fa-fw fa-wrench'></i>
							<span style={{ color: 'white', textDecoration: 'none' }}>
								Nested example
							</span>
						</Link>
					</div>
				</li>

				<hr className='sidebar-divider' />

				{/* <!-- Heading --> */}
				<div className='sidebar-heading'>Hooks</div>

				<li className='nav-item'>
					<div className='nav-link collapsed'>
						<Link to={'/useRef'}>
							<i className='fas fa-fw fa-wrench'></i>
							<span style={{ color: 'white', textDecoration: 'none' }}>
								UserRef
							</span>
						</Link>
					</div>
				</li>
			</ul>
		</>
	);
}

export default Sidebar;
