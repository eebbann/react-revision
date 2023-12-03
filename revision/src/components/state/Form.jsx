import React, { useState } from 'react';

const FormInputComponent = () => {
	// Using state to manage form input
	const [inputValue, setInputValue] = useState({ firstname: " ", lastname: " " });
	const [addValue, setAddValue] = useState([ ]);


	const handleChange = (e) => {
		const { name, value } = e.target;
		
		setInputValue((prevInput) => ({ ...prevInput, [name]: value, }));
	};

	const handleSubmit = (e) => {
    e.preventDefault();
		if (inputValue.firstname ==" " || inputValue.lastname == " "){
			alert("set a data")
	 } else{
    // Perform form submission logic with formData
		  setAddValue((prevS)=> [...prevS, inputValue.firstname + inputValue.lastname]);
		 setInputValue({ firstname: " ", lastname: " " })
  };}
     
		

	return (
		<div className='flexx'>
			<form onSubmit={handleSubmit} >
				<label> First name : </label>
				<input type="text" name="firstname" value={inputValue.firstname} onChange={handleChange} />

				<label> Last name : </label>	<input type="text" name="lastname" value={inputValue.lastname} onChange={handleChange} />
				<p className='l'><button type="submit">Submit</button></p >
				
				
			</form>
			<ul className='list'>
				{addValue.map((value, index) => (
          <ol key={index}> 
					 Typed value: {value} 
					</ol>
        ))}
			</ul>
			
		</div>
	);
};

export default FormInputComponent;