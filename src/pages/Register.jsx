import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Register.css";
import { Link } from "react-router-dom";

function Register() {
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("Nome de usuário é obrigatório"),
        password: Yup.string().min(4).required("Senha é obrigatória"),
    });

    const onSubmit = async (data, { resetForm }) => {
        setErrorMessage(null);
        try {
            const response = await api.post("/users/", data);
            console.log("Registro com sucesso:", response.data);
            alert("Usuário criado com sucesso! Faça o login.");
            navigate("/login");

        } catch (err) {
            console.log(err);
            if (err.response && err.response.data && err.response.data.error) {
                setErrorMessage(err.response.data.error);
            } else {
                setErrorMessage("Erro ao tentar fazer o registro.");
            }
        }
    };

    return (
        <div className="Register">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="Form">
                    <h2>Cadastro</h2>

                    {errorMessage && (
                        <div className="register-error-container">
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
                            placeholder="Crie uma senha"
                            className="form-input"
                        />
                        <ErrorMessage name="password" component="span" className="form-error" />
                    </div>

                    <Link to="/login" className="link">
                        Já tenho uma conta
                    </Link>

                    <button type="submit">Cadastrar</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;