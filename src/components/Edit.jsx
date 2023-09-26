import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';

function Edit({ data, setData }) {
	const navigate = useNavigate();

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

	const params = useParams();

	const getData = (index) => {
		return {
			userName: data[index].userName,
			email: data[index].email,
			mobile: data[index].mobile,
			batch: data[index].batch,
		};
	};

	useEffect(() => {
		if ( Number(params.id) >= data.length) {
			navigate('/dashboard');
		}
	}, [params.id]);

	return (
		<>
			<div className='container-fluid'>
				<div className='d-sm-flex align-items-center justify-content-between mb-4'>
					<h1 className='h3 mb-0 text-gray-800'>Edit User</h1>
				</div>

				<div className='row'>
					<Formik
						initialValues={getData(Number(params.id))}
						validationSchema={UserSchema}
						onSubmit={(values) => {
							let newArray = [...data];
							newArray.splice(Number(params.id), 1, {
								userName: values.userName,
								email: values.email,
								mobile: values.mobile,
								batch: values.batch,
							});
							setData(newArray);
							navigate('/dashboard');
						}}
					>
						{(props) => (
							<Form onSubmit={props.handleSubmit}>
								<Form.Group className='mb-3'>
									<Form.Label>User Name</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter User Name'
										name='userName'
										value={props.values.userName}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
									/>
									{props.errors.userName && props.touched.userName ? (
										<div style={{ color: 'red' }}>{props.errors.userName}</div>
									) : null}
								</Form.Group>

								<Form.Group className='mb-3'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										placeholder='Enter email'
										name='email'
										value={props.values.email}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
									/>
									{props.errors.email && props.touched.email ? (
										<div style={{ color: 'red' }}>{props.errors.email}</div>
									) : null}
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Mobile</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter Mobile Number'
										name='mobile'
										value={props.values.mobile}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
									/>
									{props.errors.mobile && props.touched.mobile ? (
										<div style={{ color: 'red' }}>{props.errors.mobile}</div>
									) : null}
								</Form.Group>
								<Form.Group className='mb-3'>
									<Form.Label>Batch</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter Batch'
										name='batch'
										value={props.values.batch}
										onChange={props.handleChange}
										onBlur={props.handleBlur}
									/>
									{props.errors.batch && props.touched.batch ? (
										<div style={{ color: 'red' }}>{props.errors.batch}</div>
									) : null}
								</Form.Group>
								<Button variant='primary' type='submit'>
									Edit User
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
}

export default Edit;
