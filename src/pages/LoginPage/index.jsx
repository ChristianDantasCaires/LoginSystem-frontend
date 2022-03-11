import "./styles.css";

const LoginPage = () => {

    return (
        <div id="login">
            <div className="title">Login</div>
            <form className="form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div className="actions">
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;