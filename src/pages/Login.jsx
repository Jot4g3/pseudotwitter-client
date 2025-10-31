import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Login.css"; 
import { Link } from "react-router-dom";

function Login() {
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Nome de usuário é obrigatório"),
        password: Yup.string().required("Senha é obrigatória"),
    });

    const onSubmit = async (data, { resetForm }) => {
        setErrorMessage(null);
        try {
            const response = await api.post("/users/login", data); // O cookie é enviado automaticamente na requisição.
            console.log("Login com sucesso: ", response.data);
            navigate("/");
        } catch (err) {
            console.log(err);
            if (err.response && err.response.data && err.response.data.error) {
                setErrorMessage(err.response.data.error);
            } else {
                setErrorMessage("Erro ao tentar fazer login.");
            }
        }
    };

    return (
        <div className="Login"> 
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="Form">
                    <h2>Login</h2>

                    {errorMessage && (
                        <div className="login-error-container">
                            {errorMessage}
                        </div>
                    )}

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

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <Field
                            autoComplete="off"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Sua senha"
                            className="form-input"
                        />
                        <ErrorMessage name="password" component="span" className="form-error" />
                    </div>

                    <Link to="/register" className="link">
                        Ainda não tenho conta
                    </Link>

                    <button type="submit">Entrar</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;