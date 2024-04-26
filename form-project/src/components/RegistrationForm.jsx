/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        emailAddress: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [submission, setSubmission] = useState(false); // New state for submission

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = (e) => {
        if (e.type === 'submit' || (e.type === 'keydown' && e.code === 'Enter')) {
            e.preventDefault();
            const errors = {};

            if (formData.firstName.length === 0) {
                errors.firstName = 'Please enter your First Name';
            }
            if (formData.lastName.length === 0) {
                errors.lastName = 'Please enter your Last Name';
            }
            if (formData.contactNumber.length === 0) {
                errors.contactNumber = 'Please enter your Contact Number';
            }
            if (formData.contactNumber.length < 10) {
                errors.contactNumber = 'Invalid Contact Number';
            }
            if (formData.emailAddress.length === 0) {
                errors.emailAddress = 'Please enter your Email Address';
            }

            setFormErrors(errors);

            // If no errors, set submission to true
            if (Object.keys(errors).length === 0) {
                setSubmission(true);
            }
        }
    };

    const isFormValid = Object.keys(formErrors).length === 0;

    return (
        <div className="main">
            {submission && isFormValid && <h1 className="submission">Registration Successful</h1>}
            <form className="form" onSubmit={validateForm}>
                <h2 className="head">Registration Form</h2>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    placeholder="Enter your First Name"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                />
                {/* ... (similarly update other input fields) */}
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    placeholder="Enter your Last Name"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                />
                {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}

                <label htmlFor="contactNumber">Contact Number</label>
                <input
                    type="text"
                    placeholder="Enter your Contact Number"
                    name="contactNumber"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleFormChange}
                />
                {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}

                <label htmlFor="emailAddress">Email Address</label>
                <input
                    type="text"
                    placeholder="Enter your Email Address"
                    name="emailAddress"
                    id="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleFormChange}
                />
                {formErrors.emailAddress && <span className="error">{formErrors.emailAddress}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationForm;