
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar';
import Home from "./component/Home"
import TodoForm from './component/TodoForm';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    
    <Route path='/login' element={<Login/>}/>
    <Route path='/todo' element={<TodoForm/>}/>
    </Routes>
    </>
  );
}

export default App;
