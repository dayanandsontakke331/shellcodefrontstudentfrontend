
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateStudent = () => {

    const navigate = useNavigate()

    const {studentId} = useParams()

    const [studentName, setStudentName] = useState()
    const [address, setAddress] = useState()
    const [contactNumber, setContactNumber] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    console.log(address)



       useEffect(()=>{

        axios.get(`http://localhost:3000/students/${studentId}`).then(res => {

            setStudentName(res.data[0].studentName)

            setAddress(res.data[0].studentAddress)

            setContactNumber(res.data[0].contactNumber)

            setEmail(res.data[0].email)

            setPassword(res.data[0].password)

        }).catch((err)=>{
            alert(err)
        })
    
       },[])
  

       
        const updatedStudentDetails =(e)=> {
            e.preventDefault()
            const data={
                "studentName" : studentName,
                "studentAddress" : address,
                "contactNumber" : contactNumber,
                "email" : email,
                "password" : password
               }
               console.log(data)
            axios.put(`http://localhost:3000/students/${studentId}`,data)
            .then(res=>{
                alert("Data updated")
                navigate("/")
            })
            .catch(err=> alert(err))
            
        }

        axios.get(`http://localhost:3000/students/${studentId}`)

  return (
    <div>
        <h1 className='text-center'> update Student</h1>

        <form className='d-flex flex-column m-3'>
     
            <input type="text" placeholder='Enter the student name' className='m-2 p-2' value={studentName} onChange={(e)=> setStudentName(e.target.value) }/>

            <input type="text" placeholder='Student Address' className='m-2 p-2' value={address} onChange={(e)=>setAddress(e.target.value)}/>

            <input type="number" placeholder='Enter Mobile Number' className='m-2 p-2' value={contactNumber} onChange={(e)=> setContactNumber(e.target.value)} />

            <input type="email" placeholder='Enter Email' className='m-2 p-2' value={email} onChange={(e)=>{setEmail(e.target.value)}} />

            <input type="password" placeholder='Enter password' className='m-2 p-2' value={password} onChange={(e)=> setPassword(e.target.value)} />

        </form>

        <div className='text-center'>
        <button className='btn btn-success align-center' onClick={updatedStudentDetails}>Update</button>
        </div>

    </div>
  )
}

export default UpdateStudent