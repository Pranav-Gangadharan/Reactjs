import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

function UseRef() {
	let count = useRef(0);
	let [name, setName] = useState('');
	let ref1 = useRef();
	let ref2 = useRef();
	let ref3 = useRef();
	let ref4 = useRef();

	useEffect(() => {
		count.current += 1;
	});
	useEffect(() => {
		ref1.current.focus();
	}, []);

	function handleChange(e, ref) {
		// let pressedValue = e.target.value;

		if (e.target.value.length === 1) {
			if (ref === ref1) ref2.current.focus();
			if (ref === ref2) ref3.current.focus();
			if (ref === ref3) ref4.current.focus();
		}
		// else {
		// 	if (ref === ref1) {
		// 		alert('Invalid otp');
		// 		ref1.current.value = '';
		// 	}
		// 	if (ref === ref2) {
		// 		alert('Invalid otp');
		// 		ref2.current.value = '';
		// 	}
		// 	if (ref === ref3) {
		// 		alert('Invalid otp');
		// 		ref3.current.value = '';
		// 	}
		// 	if (ref === ref4) {
		// 		alert('Invalid otp');
		// 		ref4.current.value = '';
		// 	}
		// }
	}

	function handleKeyUp(e, ref) {
		if (e.keyCode === 8 || (e.keyCode === 46 && e.target.value.length === 0)) {
			if (ref === ref4) ref3.current.focus();
			if (ref === ref3) ref2.current.focus();
			if (ref === ref2) ref1.current.focus();
		}
	}

	function handleClick() {
		const otp = `${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`;
		if (otp.length === 4) {
			alert(`enterder otp is ${otp}`);
		} else {
			alert('Invalid otp');
			ref1.current.value = '';
			ref2.current.value = '';
			ref3.current.value = '';
			ref4.current.value = '';
			ref1.current.focus();
		}
	}

	return (
		<div className='container-fluid'>
			<div className='d-sm-flex align-items-center justify-content-between mb-4'>
				<h1 className='h3 mb-0 text-gray-800'>UseRef</h1>
			</div>
			<input type='text' onChange={(e) => setName(e.target.value)} />
			<h2>Name is : {name}</h2>
			<h2>Components Rendered {count.current}</h2>
			<div>
				<h3>Enter OTP</h3>
				<input
					type='text'
					ref={ref1}
					onChange={(e) => handleChange(e, ref1)}
					onKeyUp={(e) => handleKeyUp(e, ref1)}
				/>
				<input
					type='text'
					ref={ref2}
					onChange={(e) => handleChange(e, ref2)}
					onKeyUp={(e) => handleKeyUp(e, ref2)}
				/>
				<input
					type='text'
					ref={ref3}
					onChange={(e) => handleChange(e, ref3)}
					onKeyUp={(e) => handleKeyUp(e, ref3)}
				/>
				<input
					type='text'
					ref={ref4}
					onChange={(e) => handleChange(e, ref4)}
					onKeyUp={(e) => handleKeyUp(e, ref4)}
				/>

				<Button variant='primary' onClick={() => handleClick()}>
					Submit
				</Button>
			</div>
		</div>
	);
}

export default UseRef;
