import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import "../styles/CreatePost.css";

function CreatePost({ onCreatePost }) {
    const initialValues = {
        title: "",
        text: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Digite um título"),
        text: Yup.string().required("Digite um conteúdo"),
        username: Yup.string().min(3).max(15).required("Identifique-se"),
    });

    const onSubmit = async (data, { resetForm }) => {
        try {
            const response = await api.post("/posts", data);
            console.log(data);
            console.log("Post adicionado com sucesso.");
            onCreatePost(response.data);
            resetForm();
        } catch (err) {
            console.log(err);
        }
    };

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

                    <div className="form-group">
                        <label htmlFor="username">Nome de Usuário</label>
                        <Field
                            autoComplete="off"
                            id="username"
                            name="username"
                            placeholder="Ex. @john123"
                            className="form-input"
                        />
                        <ErrorMessage name="username" component="span" className="form-error" />
                    </div>

                    <button type="submit">Postar</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;