import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CreatePost from './Pages/CreatePost';
import Images from './Pages/images';
import { useState } from 'react';
import './Styles/nav.scss';

function App() {
    const [IsAuth, setIsAuth] = useState(false);

    function logout() {
        setIsAuth(false);
        localStorage.removeItem('isAuth');
        window.location.pathname = '/login';
    }

    return (
        <BrowserRouter>
            <nav id="top-nav">
                <Link to="/">Home</Link>
                {IsAuth ? (
                    <button onClick={logout}>Log Out</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                <Link to="/createpost">Create Post</Link>
                <Link to="/image">Image</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/createpost"
                    element={<CreatePost {...{ IsAuth }} />}
                ></Route>
                <Route
                    path="/login"
                    element={<Login {...{ IsAuth, setIsAuth }} />}
                ></Route>

                <Route path="/image" element={<Images />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
