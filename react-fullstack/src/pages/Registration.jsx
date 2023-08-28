import { useState, useEffect } from 'react';
import classes from './CreatePost.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../NetworkCalls';

function Registration(props) {

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),

    });

    const onSubmit = (data) => {
        registerUser(data);
    }

    return (

        <div className={classes["createPostPage"]}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className={classes["formContainer"]}>

                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" className={classes['error']} />
                    <Field
                        autoComplete="off"
                        className={classes["inputCreatePost"]}
                        name="username"
                        placeholder="Enter username ..."
                    />
                    <label>Password: </label>
                    <ErrorMessage name="password" component="span" className={classes['error']} />
                    <Field
                        autoComplete="off"
                        type="password"
                        className={classes["inputCreatePost"]}
                        name="password"
                        placeholder="Enter password ..."
                    />
                    <button type="submit">Register</button>

                </Form>
            </Formik>

        </div>

    );
}

export default Registration;