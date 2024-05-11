import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import "./App.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <Navbar toggleDarkMode={toggleDarkMode} />
            <Home darkMode={darkMode} />
        </div>
    );
};

export default App;
