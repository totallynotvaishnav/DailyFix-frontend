import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import WritingsList from './components/WritingsList/WritingsList';
import WritePad from './components/WritePad/WritePad';
import AuthPage from './pages/AuthPage';
import AuthContext from './auth-context';

function App() {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuth(true);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const home = (
        <React.Fragment>
            <NavBar />
            {isAuth && <WritingsList />}
        </React.Fragment>
    );
    const write = (
        <React.Fragment>
            <NavBar />
            <WritePad />
        </React.Fragment>
    );
    return (
        <div className='App'>
            <AuthContext.Provider value={{ isAuth, setIsAuth, userId, setUserId, name, setName }}>
                <Routes>
                    <Route path='/' element={home} />
                    <Route path='/write' element={write} />
                    <Route path='/login' element={<AuthPage />} />
                    <Route path='/sign-up' element={<AuthPage />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
