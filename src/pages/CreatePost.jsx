import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import api from "../services/api";
import "../styles/CreatePost.css"

function CreatePost(){

    const inialValues = {
        title: "",
        text: "",
        username: "",
    };

    const validationSchema = Yup.object.shape({
        title: Yup.string().required("Digite um título"),
        text: Yup.string().required("Digite um conteúdo"),
        username: Yup.string().min(3).max(15).required("Identifique-se")
    });

    const onSubmit = (data) => {
        try {
            api.post("/posts", data).then((response) => {
                console.log(data);
                console.log("Post adicionado com sucesso.")
            });
        } catch (err) {
            console.log(err)
        }
    };

    return(
        <div className="CreatePost">
            <Formik
                initialValues={inialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="Form">
                    <h1>Post</h1>
                    <label>Título: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="title"
                        placeholder="(Ex. Title...)"
                    />
                    <label>Conteúdo: </label>
                    <ErrorMessage name="text" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="text"
                        placeholder="(Ex. Post...)"
                    />
                    <label>Nome de Usuário: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="username"
                        placeholder="(Ex. John123...)"
                    />

                    <button type="submit">Criar Post</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;