import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function Create({ data, setData }) {
	let navigate = useNavigate();

	const UserSchema = Yup.object().shape({
		userName: Yup.string()
			.required('* Required')
			.min(4, '* User Name should be altleast 4 characters'),
		email: Yup.string().email('Invalied email').required('* Required'),
		mobile: Yup.string()
			.matches(/^\d{10}$/, '* Invalid Mobile Number')
			.required('* Required'),
		batch: Yup.string().required('* Required'),
	});

	return (
		<>
			<div className='container-fluid'>
				<div className='d-sm-flex align-items-center justify-content-between mb-4'>
					<h1 className='h3 mb-0 text-gray-800'>Create User</h1>
				</div>

				<div className='row'>
					<Formik
						initialValues={{
							userName: '',
							email: '',
							mobile: '',
							batch: '',
						}}
						validationSchema={UserSchema}
						onSubmit={(values) => {
							let newArray = [...data];
							newArray.push(values);
							setData(newArray);
							navigate('/dashboard');
						}}
					>
						{({ errors, touched, handleBlur, handleChange, handleSubmit }) => (
							<Form onSubmit={handleSubmit}>
								<Form.Group className='mb-3'>
									<Form.Label>User Name</Form.Label>
									<Form.Control
										type='text'
										name='userName'
										placeholder='Enter User Name'
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.userName && touched.userName ? (
										<div style={{ color: 'red' }}>{errors.userName}</div>
									) : null}
								</Form.Group>

								<Form.Group className='mb-3'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										name='email'
										placeholder='Enter email'
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.email && touched.email ? (
										<div style={{ color: 'red' }}>{errors.email}</div>
									) : null}
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Mobile</Form.Label>
									<Form.Control
										type='text'
										name='mobile'
										placeholder='Enter Mobile Number'
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.mobile && touched.mobile ? (
										<div style={{ color: 'red' }}>{errors.mobile}</div>
									) : null}
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Batch</Form.Label>
									<Form.Control
										type='text'
										name='batch'
										placeholder='Enter Batch'
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.batch && touched.batch ? (
										<div style={{ color: 'red' }}>{errors.batch}</div>
									) : null}
								</Form.Group>
								<Button variant='primary' type='submit'>
									Submit
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
}

export default Create;
