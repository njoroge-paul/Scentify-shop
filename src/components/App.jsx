
//import './App.jsx'
import Navbar from './Navbar.jsx'
import SearchBar from './searchbar.jsx';
import Content from './Content.jsx';
import Login from './Login.jsx';
import { Routes,Route} from 'react-router-dom';
import Signup from './Sign-up.jsx';
import About from './About.jsx';

function App() {
  

  return (
   <div>
    
   <Routes>
   <Route path="/" element={
        <>
          <Navbar />
          <SearchBar />
          <Content />
        </>
      } />
      <Route path="/Login.jsx" element={<Login />} />
      <Route path="/Sign-up.jsx" element={<Signup/>} />
      <Route path="/About.jsx" element={<About/>}/>
   </Routes>
  
   </div>
  )
}

export default App;
