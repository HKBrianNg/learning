import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import About from './component/about/About';
import Search from './component/search/Search';
import Logout from './component/auth/Logout';
import ImageDetails from './component/home/ImageDetails';
import { ThemeProvider, createTheme } from '@mui/material/styles';



function App() {
  const [appTheme, setAppTheme] = useState('light');

  const theme = createTheme({
    palette: {
      mode: appTheme,
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/image/:id" element={<ImageDetails />} />
          <Route path="/search/:searchstring" element={<Search />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
