import Sidebar from './components/Sidebar';
import Dashborad from './components/Dashborad';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Nested from './components/Nested';
import Account from './components/Nested/Account';
import Product from './components/Nested/Product';
import Staff from './components/Nested/Staff';
import Recipt from './components/Nested/Recipt';
import UseRef from './components/Hooks/UseRef';
import UseReducer from './components/Hooks/UseReducer';
import UserContext from './components/Context/UserContext';
import DashboardContext from './components/Context/DashboardContext';

function App() {
	return (
		<>
			<div id='wrapper'>
				<BrowserRouter>
					<Sidebar />
					<Routes>
						<Route
							path='dashboard'
							element={
								<UserContext>
									<DashboardContext>
										<Dashborad />
									</DashboardContext>
								</UserContext>
							}
						/>
						<Route
							path='create'
							element={
								<UserContext>
									<Create />
								</UserContext>
							}
						/>
						<Route
							path='edit/:id'
							element={
								<UserContext>
									<Edit />
								</UserContext>
							}
						/>
						<Route path='nested' element={<Nested />}>
							<Route path='account' element={<Account />} />
							<Route path='product' element={<Product />} />
							<Route path='staff' element={<Staff />} />
							<Route path='recipt' element={<Recipt />} />
						</Route>
						<Route path='useRef' element={<UseRef />} />
						<Route path='useReducer' element={<UseReducer />} />
						<Route path='*' element={<Navigate to={'/dashboard'} />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
