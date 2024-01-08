
import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Editty from 'Editty';
 
const LeavetypeCRUD = () => {
 
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    const[name, setName] = useState('')
    const[defaultDays, setDefaultDays] = useState('')
   
   
 
    const[editId, setEditId] = useState('');
    const[editname, setEditName] = useState('')
    const[editdefaultDays, setEditDefaultDays] = useState('')
   
    const leavetypedata = [
        {
            id:1,
            name: 'Emergency',
            defaultDays:2
        },
        {
            id:2,
            name: 'Sick',
            defaultDays:3
        },
        {
            id:3,
            name: 'privilege',
            defaultDays:5
        },
    ]
 
    const [data, setData] = useState([]);
 
    useEffect(()=> {
        getData();
    },[])
 
    const getData = () =>{
        axios.get('http://localhost:5063/api/LeaveType')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
 
    const handleEdit =(id) =>{
        //alert(id);
        handleShow();
        axios.get(`http://localhost:5063/api/LeaveType/${id}`)
        .then((result) => {
            setEditName(result.data.name);
            setEditDefaultDays(result.data.defaultDays);
            setEditId(id);
        })
        .catch((error) => {
        console.log(error)
        })
    }
 
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this LeaveType") == true)
        {
           axios.delete(`http://localhost:5063/api/LeaveType/${id}`)
           .then((result)=>{
            if(result.status === 200)
            {
                toast.success('LeaveType has been deleted successfully');
                getData();
            }
           })
           .catch((error)=>{
            toast.error(error);
           })
        }
    }
 
    const handleUpdate =() =>{
     const url = `http://localhost:5063/api/LeaveType/${editId}`;
     const data = {
        "id":editId,
        "name": editname,
        "defaultDays": editdefaultDays
     }
     axios.put(url, data)
     .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success('LeaveType has been updated successfully');
     }).catch((error)=>{
        toast.error(error);
     })
    }
 
    const handleSave =() =>{
        const url = 'http://localhost:5063/api/LeaveType';
        const data = {
           
        "name": name,
        "defaultDays": defaultDays
        }
 
        axios.post(url, data)
        .then((result) => {
            getData();
            clear();
            toast.success('LeaveType added successfully');
        }).catch((error)=>{
            toast.error(error);
        })
 
    }
 
    const clear = () =>{
        setName('');
        setDefaultDays('');
        setEditName('');
        setEditDefaultDays('');
        setEditId('');
    }
 
    return(
        <div className="w-100 card border-0 p-4">
    <div className="card-header bg-success bg-gradient ml-0 py-3">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="text-white py-2">Index</h2>
        </div>
      </div>
    </div>
    <div className="card-body border p-4">
      <div className="row pb-3">
        <div className="col-6 offset-6 text-end">
       
        </div>
      </div>
      <ToastContainer />
      <Container>
     
      <Row>
       
        <Col><input type="text" className="form-control" placeholder="Leave Type Name" value={name} onChange={(e)=> setName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Number of Default Days" value={defaultDays} onChange={(e)=> setDefaultDays(e.target.value)} /></Col>
        <Col><button className="btn btn-success" onClick={()=> handleSave()}>Create</button></Col>
      </Row>
    </Container>
    <br></br>
           
        <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Leave Type Name</th>
          <th>Default Number of Days</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
 
        {
            data && data.length>0 ?
            data.map((item,index)=>{
                return(
          <tr key={index}>
         
         
          <td>{item.name}</td>
          <td>{item.defaultDays}</td>
          <td>
                <div className="w-75 btn-group" role="group">
               
                    <button className="btn btn-success" onClick={()=> handleEdit(item.id)}>Edit</button> &emsp;
                 
                 
                  <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>
                 
                </div>
              </td>
        </tr>
 
                )
            })
            :
            'Loading...'
        }
       
       
      </tbody>
    </Table>
 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update LeaveType</Modal.Title>
        </Modal.Header>
        <Modal.Body>
 
        <Row>
       
        <Col><input type="text" className="form-control" placeholder="Enter Leave Type Name" value={editname} onChange={(e)=> setEditName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Number of Default Days" value={editdefaultDays} onChange={(e)=> setEditDefaultDays(e.target.value)} /></Col>
       
       
      </Row>
 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    )
}
 
export default LeavetypeCRUD;