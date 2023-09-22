import Sidebar from "./components/Sidebar";
import Dashborad from "./components/Dashborad";
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Create from "./components/Create";
import Edit from "./components/Edit";
import { useState } from "react";

function App() {
  let [tableData, setTableData] = useState([
		{
			userName: 'Pranav',
			email: 'pranav@gmail.com',
			mobile: '1111121',
			batch: 'B100',
		},
		{
			userName: 'Buddy',
			email: 'buddy@gmail.com',
			mobile: '1111121',
			batch: 'B101',
		},
	]);
  return (
		<>
			<div id='wrapper'>
				<BrowserRouter>
					<Sidebar />
					<Routes>
						<Route
							path='/dashboard'
							element={<Dashborad data={tableData} setData={setTableData} />}
						/>
						<Route
							path='/create'
							element={<Create data={tableData} setData={setTableData} />}
						/>
						<Route path='/edit' element={<Edit />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App
