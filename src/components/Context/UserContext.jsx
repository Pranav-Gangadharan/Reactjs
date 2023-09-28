import React, { useState } from 'react';
export const UserDataContext = React.createContext(null);

function UserContext({ children }) {
	let [data, setData] = useState([
		{
			userName: 'Pranav',
			email: 'pranav@gmail.com',
			mobile: '1111121891',
			batch: 'B100',
		},
		{
			userName: 'Buddy',
			email: 'buddy@gmail.com',
			mobile: '1111121891',
			batch: 'B101',
		},
	]);

	return (
		<UserDataContext.Provider value={{ data, setData }}>
			{children}
		</UserDataContext.Provider>
	);
}

export default UserContext;
