import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import "../styles/CreatePost.css";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";


function CreatePost({ onCreatePost}) {
    
    const { user, loading } = useContext(UserContext);
    const navigate = useNavigate();

    const initialValues = {
        title: "",
        text: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Digite um título"),
        text: Yup.string().required("Digite um conteúdo"),
    });

    const onSubmit = async (data, { resetForm }) => {
        if (!user) {
            navigate("/login");
            return;
        }

        try {
            const {title, text} = data;

            const response = await api.post("/posts", {
                title: title,
                text: text,
            });

            console.log("Post adicionado com sucesso.");
            console.log(response);
            onCreatePost(response.data);
            resetForm();
        } catch (err) {
            console.log(err);
        }
    };

    if (loading) return <Loader size={50}/>

    return (

        <div className="CreatePost">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="Form">
                    <h2>Criar Post</h2>

                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <Field
                            autoComplete="off"
                            id="title"
                            name="title"
                            placeholder="O que está acontecendo?"
                            className="form-input"
                        />
                        <ErrorMessage name="title" component="span" className="form-error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="text">Conteúdo</label>
                        <Field
                            as="textarea"
                            rows="4"
                            autoComplete="off"
                            id="text"
                            name="text"
                            placeholder="Adicione mais detalhes..."
                            className="form-input"
                        />
                        <ErrorMessage name="text" component="span" className="form-error" />
                    </div>

                    <button type="submit">Postar</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;