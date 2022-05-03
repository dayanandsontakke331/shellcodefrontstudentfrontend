import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const StudentEntry = () => {

    const navigate = useNavigate()

    const [studentName, setStudentName] = useState("")
    const [address, setAddress] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


  

        const studetDetails = {
            "studentName" : studentName,
            "studentAddress" : address,
            "contactNumber" : contactNumber,
            "email" : email,
            "password" : password
        }


   const admitHandler = () => {

    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"); // Email Regex
    const regexPass  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/; //password regex

    if(studentName.length < 3){
        alert("Please Enter the valid name")
        return false
    }
    else if(contactNumber.length < 9){
        alert("Please Enter the valid mobile number")
        return false
    }
    else if(contactNumber.length > 9){
        alert("Enter the valid mobile number")
        return false
    }
    else if(address.length < 5){

        alert("please Enter the valid address")

        return false
    }
    else if (!strongRegex.test(email)) {

        alert("please Enter the valid email")

        return false;

    } else if (!regexPass.test(password)) {

        alert("password must at one uppercase, one lowercase, one digit, one special charecter and length should be 8 charecter")

        return false;
    }

        axios.post('http://localhost:3000/students/', studetDetails)
        navigate('/')
   }

  return (
    <div>
        <h1 className='text-center mb-3 mt-3'>Student Entry</h1>
        <form className='d-flex flex-column m-3'>
     
            <input type="text" placeholder='Enter the student name' className='m-2 p-2' onChange={(e)=> setStudentName(e.target.value) } required/>
          
            <input type="text" placeholder='Student Address' className='m-2 p-2' onChange={(e)=>setAddress(e.target.value)} required/>

            <input type="number" placeholder='Enter Mobile Number' className='m-2 p-2' onChange={(e)=> setContactNumber(e.target.value)} required/>

            <input type="email" placeholder='Enter Email' className='m-2 p-2' onChange={(e)=>{setEmail(e.target.value)}} required/>

            <input type="password" placeholder='Enter password' className='m-2 p-2' onChange={(e)=> setPassword(e.target.value)} required/>
        </form>
        <div className='text-center'>
        <button className='btn btn-success align-center' onClick={admitHandler}>Admit</button>
        </div>
    </div>
  )
}

export default StudentEntry