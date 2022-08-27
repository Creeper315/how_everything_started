import '../scss/section1/login.scss';
// import TopNav from './topNav';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navi = useNavigate();
    const email = useRef('');
    const password = useRef('');
    const EMAIL = 'lily315@gmail.com';
    const PASSWORD = '123456';

    function onLogin() {
        // console.log(env, process.env.EMAIL, env.EMAIL, env.PASSWORD);
        if (email.current !== EMAIL) {
            alert('User name does not exist');
            return;
        }
        if (password.current !== PASSWORD) {
            alert('Password incorrect');
            return;
        }
        navi('/main');
    }

    return (
        <div id="login">
            {/* <TopNav /> */}
            <center>
                {' '}
                <h1> Student Login Form </h1>{' '}
            </center>
            <form>
                <div className="container">
                    <label>Username : </label>
                    <input
                        onChange={(e) => {
                            email.current = e.target.value;
                        }}
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        required
                    />
                    <label>Password : </label>
                    <input
                        onChange={(e) => {
                            password.current = e.target.value;
                        }}
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                    />
                    <button onClick={onLogin}>Login</button>
                    <input type="checkbox" onChange={() => {}} /> Remember me
                    <button className="cancelbtn">Cancel</button>
                    Forgot <a href="#"> password? </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
