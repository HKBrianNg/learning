import { Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import About from './component/about/About';
import Search from './component/search/Search';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:string" element={<Search />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
