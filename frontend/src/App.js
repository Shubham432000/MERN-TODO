
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar';
import Home from "./component/Home"
import TodoForm from './component/TodoForm';
import PrivateComponent from './component/PrivateComponent';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route element={<PrivateComponent/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/todo' element={<TodoForm/>}/>
    </Route>
    <Route exact path='/' element={<Signup/>}/>
  
    <Route path='/login' element={<Login/>}/>
    
    
    </Routes>
    </>
  );
}

export default App;
