
import './App.jsx'
import Navbar from './Navbar.jsx'
import SearchBar from './searchbar.jsx';
import Content from './Content.jsx';
import Login from './Login.jsx';

function App() {
  

  return (
    <div>
    {/* <h1 className='text-3xl' >My First React App</h1> */}
   <Navbar />
     <SearchBar/>
     <Content/>
     <Login/>
    </div>
  )
}

export default App;
