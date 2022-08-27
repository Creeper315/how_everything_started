// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SoundProvider from './sound/soundProvider';
// import SoundComp from './sound/soundComp';

import Login from './section1/login';
import Main from './section1/Main/main';
import NotFound from './section1/notFound';

import ImgShow from './section2/imgShow';
import SvgScene from './section1/Main/svgScene';
import SvgSunny from './section1/Main/svgSunny';
import SvgMain from './section1/Main/svgMain';
import Section2 from './section2/main';
import Section3 from './section3/main';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/main" element={<Main />}></Route>
                    <Route path="/section2" element={<Section2 />}></Route>
                    <Route path="/section3" element={<Section3 />}></Route>

                    <Route path="/svg1" element={<SvgScene />}></Route>
                    <Route path="/svg2" element={<SvgSunny />}></Route>
                    <Route path="/svg" element={<SvgMain />}></Route>

                    <Route path="/*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import CreatePost from './Pages/CreatePost';
// import Images from './Pages/images';
// import { useState } from 'react';
// import './Styles/nav.scss';

// function App() {
//     const [IsAuth, setIsAuth] = useState(false);

//     function logout() {
//         setIsAuth(false);
//         localStorage.removeItem('isAuth');
//         window.location.pathname = '/login';
//     }

//     return (
//         <BrowserRouter>
//             <nav id="top-nav">
//                 <Link to="/">Home</Link>
//                 {IsAuth ? (
//                     <button onClick={logout}>Log Out</button>
//                 ) : (
//                     <Link to="/login">Login</Link>
//                 )}
//                 <Link to="/createpost">Create Post</Link>
//                 <Link to="/image">Image</Link>
//             </nav>

//             <Routes>
//                 <Route path="/" element={<Home />}></Route>
//                 <Route
//                     path="/createpost"
//                     element={<CreatePost {...{ IsAuth }} />}
//                 ></Route>
//                 <Route
//                     path="/login"
//                     element={<Login {...{ IsAuth, setIsAuth }} />}
//                 ></Route>

//                 <Route path="/image" element={<Images />}></Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;
