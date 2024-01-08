//import logo from './logo.svg';
import './App.css';
import Layout from './Layout'
import Login from './Login';
import Register from './Register'
import Footer from './Footer';
import Myleave from './Myleave';
import LeaveType from './LeaveType';
import Create from './Create';
import Edit from './Edit';
import Details from './Details';
import Createtype from './Createtype';
import Edittype from './Edittype';
import LeaveRequest from './LeaveRequest';
import LeavetypeCRUD from './LeavetypeCRUD';
//import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
 
import { BrowserRouter as Router, Routes,Route, Link, BrowserRouter } from 'react-router-dom';
 
//import Navbar from './Components/Navbar';
 
function App() { 
  return (
    <div className='App'>
      <Layout></Layout>
      
      {/*
      <Index></Index>
      <Create></Create>
      <Edit></Edit>
      <Delete></Delete>  */}
 
    <BrowserRouter>
      <Routes>
         <Route path="/Login" element={<Login />}></Route>
         <Route path="/Register" element={<Register></Register>}></Route>
         <Route path="/Myleave" element={<Myleave />}></Route>
         <Route path="/Create" element={<Create />}></Route>
         <Route path="/Details" element={<Details />}></Route>
         <Route path="/Edittype" element={<Edittype />}></Route>
         <Route path="/Edit" element={<Edit />}></Route>
         <Route path="/LeaveType" element={<LeaveType />}></Route>
         <Route path="/LeaveRequest" element={<LeaveRequest />}></Route>
         <Route path="/LeavetypeCRUD" element={<LeavetypeCRUD />}></Route>

      </Routes>
    </BrowserRouter>
   
 
    </div>
  );
};
 
export default App;