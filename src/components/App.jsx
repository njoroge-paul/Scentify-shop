
//import './App.jsx'
import Navbar from './Navbar.jsx'
import Content from './Content.jsx';
import Login from './Login.jsx';
import { Routes,Route} from 'react-router-dom';
import Signup from './Sign-up.jsx';
import About from './About.jsx';
import Logout from './logout.jsx';
import AddToCart from './AddToCart.jsx'
//import { useState } from 'react';

function App() {
 // const [searchQuery,setSearchQuery] = useState('');

  return (
   <div>
    
   <Routes>
   <Route path="/" element={
        <>
          <Navbar />
          <Content />
        </>
      } />
      <Route path="/Login.jsx" element={<Login />} />
      <Route path="/Sign-up.jsx" element={<Signup/>} />
      <Route path="/About.jsx" element={<About/>}/>
      <Route path='/logout.jsx' element={<Logout/>}/>
      <Route path='/AddToCart.jsx' element={<AddToCart/>}/>
   </Routes>
  
   </div>
  )
}

export default App;
