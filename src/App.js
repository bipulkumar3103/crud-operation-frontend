import './App.css';
import About from './component/About';
import AddUser from './component/AddUser';
import AllUser from './component/AllUser';
import EditUser from './component/EditUser';
import Footer from './component/Footer';
import Home from './component/Home';
import NavBar from './component/NavBar';
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/addUser' element={<AddUser />}/>
        <Route path='/allUser' element={<AllUser />}/>
        <Route path='/editUser/:id' element={<EditUser />}/>
      

      </Routes>
      <Footer />
    </>
  );
}

export default App;
