import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center
`
const Title = styled.h1`
    color: #000;
    text-align: center;
`

const Form = styled.form`
    background: #c1c1c1;
    width: 40%;
    border-radius: 5px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    margin: 0 auto;
    text-align: center;
`

const Field = styled.div`
    padding: 5px 10px;
`

const Label = styled.label`
    display: block;
`

const Input = styled.input`
    width: 100%;
    font-size: 1.2em;
`

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, senha });
    }

    return (
        <Container id="login">
            <Title className="title">Login do Sistema</Title>
            <Form onSubmit={handleSubmit}>
                <Field className="field">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Field>
                <Field className="field">
                    <Label htmlFor="password">Senha</Label>
                    <Input type="password" name="password" id="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                </Field>
                <div className="actions">
                    <button type="submit">Enviar</button>
                </div>
            </Form>
        </Container>
    )
}

export default LoginPage;