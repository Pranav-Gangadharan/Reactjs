import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Create({ data, setData }) {
	let [userName, setUserName] = useState('');
	let [email, setEmail] = useState('');
	let [mobile, setMobile] = useState('');
	let [batch, setBatch] = useState('');
  let navigate = useNavigate()

	let handleSave = () => {
		let newArray = [...data];
		newArray.push({
			userName,
			email,
			mobile,
			batch,
		});
    setData(newArray)
    navigate("/dashboard")
	};

	return (
		<>
			<div className='container-fluid'>
				<div className='d-sm-flex align-items-center justify-content-between mb-4'>
					<h1 className='h3 mb-0 text-gray-800'>Create User</h1>
				</div>

				<div className='row'>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>User Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter User Name'
								onChange={(e) => setUserName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Mobile</Form.Label>
							<Form.Control
								type='number'
								placeholder='Enter Mobile Number'
								onChange={(e) => setMobile(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Batch</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter Batch'
								onChange={(e) => setBatch(e.target.value)}
							/>
						</Form.Group>
						<Button
							variant='primary'
							type='submit'
							onClick={() => handleSave()}
						>
							Submit
						</Button>
					</Form>
				</div>
			</div>
		</>
	);
}

export default Create;
