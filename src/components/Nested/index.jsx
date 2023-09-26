import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Nested() {
	let [page, setPage] = useState(0);
	let navigate = useNavigate();
	return (
		<div className='container-fluid'>
			<div className='d-sm-flex align-items-center justify-content-between mb-4'>
				<h1 className='h3 mb-0 text-gray-800'>Nested</h1>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque
				architecto nemo consectetur accusamus quasi, reprehenderit ex, harum
				laborum distinctio a quibusdam rerum sapiente omnis?
			</p>
			<div className='container-fluid'>
				<ul className='pageButtons'>
					<li
						className={page === 0 ? 'active' : ''}
						onClick={() => {
							setPage(0);
							navigate('Product');
						}}
					>
						Products
					</li>
					<li
						className={page === 1 ? 'active' : ''}
						onClick={() => {
							setPage(1);
							navigate('account');
						}}
					>
						Accounts
					</li>
					<li
						className={page === 2 ? 'active' : ''}
						onClick={() => {
							setPage(2);
							navigate('staff');
						}}
					>
						Staff
					</li>
					<li
						className={page === 3 ? 'active' : ''}
						onClick={() => {
							setPage(3);
							navigate('recipt');
						}}
					>
						Recipts
					</li>
				</ul>
			</div>
			<div className='container-fluid'>
				<Outlet />
			</div>
		</div>
	);
}

export default Nested;
