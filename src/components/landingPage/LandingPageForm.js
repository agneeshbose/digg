import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

import ActionButton from '../shared/ActionButton';

const FormWrapper = styled.div`
    padding: 30px;
`;

const InputField = styled(Field)`
    width: 100%;
    height: 60px;
    margin-bottom: 5px;
    color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(34, 36, 38, 0.25);
    border-radius: 5px;
    &.radio {
        width: 20px;
        margin: 0px 5px;
    }
    &.dropdown {
        background-color: white;
    }
    &:focus {
        outline: none;
        color: black;
        border: 1px solid rgba(150, 200, 218);
    }
`;

const Error = styled.div`
    color: red;
`;

const Radio = styled.div`
    display: flex;
    align-items: center;
`;

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
    dateOfBirth: Yup.string().required('Date of birth is required!'),
    gender: Yup.string().required('Gender is required!'),
    nationality: Yup.string().required('Nationality is required!'),
    countryOfResidence: Yup.string().required('Country is required!'),
    contactNumber: Yup.string()
        .required('Contact number is required!')
        .matches(/^([0-9]){1,14}$/, 'Enter a valid phone number'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
});

export class LandingPageForm extends Component {
    nationalityOptions = [
        {
            text: 'United Arab Emirates',
            value: 1,
        },
        {
            text: 'Others',
            value: 2,
        },
    ];

    render() {
        let isMobile =
            Math.min(window.screen.width, window.screen.height) < 768 ||
            navigator.userAgent.indexOf('Mobi') > -1;

        const handleFormSubmit = (values) => {
            this.props.handlePageChange('forward');
            this.props.handleProfileInfoChange(values);
        };

        return (
            <FormWrapper>
                <h2>Apply now to work in Dubai</h2>
                <br />
                <Formik
                    initialValues={this.props.profileInfo}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleFormSubmit(values)}
                >
                    {({
                        errors,
                        touched,
                        handleSubmit,
                        isSubmitting,
                        handleChange,
                    }) => {
                        return (
                            <Form onSubmit={handleSubmit}>
                                <Grid columns={isMobile ? 1 : 2}>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <InputField
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                            />
                                            <Error>
                                                {touched.firstName &&
                                                    errors.firstName}
                                            </Error>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <InputField
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                            />
                                            <Error>
                                                {touched.lastName &&
                                                    errors.lastName}
                                            </Error>
                                        </Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column>
                                            <InputField
                                                type="date"
                                                name="dateOfBirth"
                                            />
                                            <Error>
                                                {touched.dateOfBirth &&
                                                    errors.dateOfBirth}
                                            </Error>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Grid.Row>
                                                <label htmlFor="gender">
                                                    Gender
                                                </label>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Radio>
                                                    <InputField
                                                        type="radio"
                                                        id="male"
                                                        name="gender"
                                                        value="Male"
                                                        className="radio"
                                                    />

                                                    <label htmlFor="male">
                                                        Male
                                                    </label>

                                                    <InputField
                                                        type="radio"
                                                        id="female"
                                                        name="gender"
                                                        value="Female"
                                                        className="radio"
                                                    />

                                                    <label htmlFor="female">
                                                        Female
                                                    </label>
                                                </Radio>
                                                <Error>
                                                    {touched.gender &&
                                                        errors.gender}
                                                </Error>
                                            </Grid.Row>
                                        </Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column>
                                            <InputField
                                                as="select"
                                                name="nationality"
                                                className="dropdown"
                                                onChange={handleChange}
                                            >
                                                <option disabled selected value>
                                                    Nationality
                                                </option>
                                                {this.nationalityOptions.map(
                                                    ({ text, value }) => (
                                                        <option
                                                            key={value}
                                                            value={value}
                                                        >
                                                            {text}
                                                        </option>
                                                    )
                                                )}
                                            </InputField>
                                            <Error>
                                                {touched.nationality &&
                                                    errors.nationality}
                                            </Error>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <InputField
                                                as="select"
                                                name="countryOfResidence"
                                                className="dropdown"
                                                onChange={handleChange}
                                            >
                                                <option disabled selected value>
                                                    Country of Residence
                                                </option>
                                                {this.nationalityOptions.map(
                                                    ({ text, value }) => (
                                                        <option
                                                            key={value}
                                                            value={value}
                                                        >
                                                            {text}
                                                        </option>
                                                    )
                                                )}
                                            </InputField>
                                            <Error>
                                                {touched.countryOfResidence &&
                                                    errors.countryOfResidence}
                                            </Error>
                                        </Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column>
                                            <h4>How we can contact you?</h4>
                                        </Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column>
                                            <InputField
                                                type="text"
                                                name="contactNumber"
                                                placeholder="Contact number"
                                            />
                                            <Error>
                                                {touched.contactNumber &&
                                                    errors.contactNumber}
                                            </Error>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <InputField
                                                type="text"
                                                name="email"
                                                placeholder="Email address"
                                            />
                                            <Error>
                                                {touched.email && errors.email}
                                            </Error>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column />
                                        <Grid.Column textAlign="right">
                                            <ActionButton
                                                type="submit"
                                                disabled={isSubmitting}
                                                action="forward"
                                                mr={false}
                                            >
                                                Apply now
                                            </ActionButton>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Form>
                        );
                    }}
                </Formik>
            </FormWrapper>
        );
    }
}

export default LandingPageForm;
