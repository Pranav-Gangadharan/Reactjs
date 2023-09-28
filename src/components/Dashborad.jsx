import { Button, Table } from 'react-bootstrap';
import Tile from './Tile';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserDataContext } from './Context/UserContext';
import { DashboardDataContext } from './Context/DashboardContext';
function Dashborad() {
	let { dashboardData } = useContext(DashboardDataContext);

	let {data,setData} = useContext(UserDataContext);

	let handleDelete = (index) => {
		let newArray = [...data]; //!deep copy
		newArray.splice(index, 1);
		setData(newArray);
	};

	const navigate = useNavigate();

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
					{dashboardData.map((e, i) => {
						return (
							<Tile
								color={e.color}
								icon={e.icon}
								title={e.title}
								isProgress={e.isProgress}
								value={e.value}
								key={i}
							/>
						);
					})}
				</div>

				<div className='row'>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>s.no</th>
								<th>userName</th>
								<th>Email</th>
								<th>Mobile</th>
								<th>batch</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{data.map((e, i) => {
								return (
									<tr key={i}>
										<td>{i + 1}</td>
										<td>{e.userName}</td>
										<td>{e.email}</td>
										<td>{e.mobile}</td>
										<td>{e.batch}</td>
										<td>
											<Button
												variant='info'
												onClick={() => navigate(`/edit/${i}`)}
											>
												Edit
											</Button>
											&nbsp; &nbsp;
											<Button variant='danger' onClick={() => handleDelete(i)}>
												Delete
											</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</div>
			</div>
		</>
	);
}

export default Dashborad;
