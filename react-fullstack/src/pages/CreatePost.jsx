import classes from './CreatePost.module.css';
import * as Yup from 'yup';
// import axios from "axios";
import { fetchCreatePost } from '../NetworkCalls';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';




function CreatePost() {
    let navigate = useNavigate()


    const initialValues = {
        title: "",
        postText: "",
        username: ""
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    });



    const onSubmit = (data) => {
        fetchCreatePost(data);
        //redirect to home page
        navigate('/');
    };



    return (
        <div className={classes["createPostPage"]}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className={classes["formContainer"]}>
                    <label>Title: </label>
                    <ErrorMessage name="title" component="span" className={classes['error']} />
                    <Field
                        autoComplete="off"
                        className={classes["inputCreatePost"]}
                        name="title"
                        placeholder="Enter post title ..."
                    />
                    <label>Content: </label>
                    <ErrorMessage name="postText" component="span" className={classes['error']} />
                    <Field
                        autoComplete="off"
                        className={classes["inputCreatePost"]}
                        name="postText"
                        placeholder="Enter post text ..."
                    />
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" className={classes['error']} />
                    <Field
                        autoComplete="off"
                        className={classes["inputCreatePost"]}
                        name="username"
                        placeholder="Enter username ..."
                    />
                    <button type="submit">Create post</button>

                </Form>
            </Formik>

        </div>
    );
}

export default CreatePost;