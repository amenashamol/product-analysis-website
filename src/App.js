import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blogs/Blogs';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/reviews" element={<Reviews></Reviews>}/>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
      <Route path="/blogs" element={<Blogs></Blogs>}/>

        <Route path="about" element={<About />} />
        <Route path='*' element={<NotFound></NotFound>}></Route> 
      </Routes>
      
    </div>
  );
}

export default App;
