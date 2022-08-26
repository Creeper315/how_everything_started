import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const Login = ({ IsAuth, setIsAuth }) => {
    let navi = useNavigate();
    const email = useRef('');
    const password = useRef('');

    function signin() {
        signInWithPopup(auth, provider).then((e) => {
            console.log('res', e);
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navi('/');
        });
        return;
    }

    function onRegister() {
        createUserWithEmailAndPassword(auth, email.current, password.current)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((e) => console.log('register err', e));
    }

    function onLogin() {
        signInWithEmailAndPassword(auth, email.current, password.current)
            .then((userCredential) =>
                console.log('sign in good', userCredential)
            )
            .catch((e) => console.log('login err', e));
    }

    return (
        <div>
            login
            <button onClick={signin}>Sign in with google</button>
            <div>
                <button onClick={onRegister}>Register !</button>
                <button onClick={onLogin}>Login !</button>
                <input
                    placeholder="email"
                    onChange={(e) => (email.current = e.target.value)}
                />
                <input
                    placeholder="password"
                    onChange={(e) => (password.current = e.target.value)}
                />
            </div>
        </div>
    );
};

export default Login;
