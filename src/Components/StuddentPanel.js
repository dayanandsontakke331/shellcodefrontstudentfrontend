import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate, } from 'react-router-dom'

const StuddentPanel = () => {

    const [studentData, setStudentData] = useState([])
  

    console.log(studentData)

    const navigate = useNavigate()

    useEffect(() => {
        
        axios.get('http://localhost:3000/students').then(res => {
            setStudentData(res.data)
        }).catch(err => alert(err))
  
    }, [])


    const deleteStudent = (studentId) => {

        console.log(studentId)

        axios.delete(`http://localhost:3000/students/${studentId}`)

        .then(res=>{

            alert("data deleted")

            window.location.reload()

        }).catch(err => alert(err))
    }

  return (

    <div className='m-5 p-3'>
        <h1 className='text-center'>Student Panel</h1>
        <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">Student ID</th>
                <th scope="col">Student Name</th>
                <th scope="col">Student Address</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Student Email</th>
                <th scope="col">Student password</th>
                <th scope="col"> Update Student</th>
                <th scope="col"> Delete Student</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentData.map(data => {
                        return(
                            <tr>
                                <th scope="row">{data._id}</th>
                                <td>{data.studentName}</td>
                                <td>{data.studentAddress}</td>
                                <td>{data.contactNumber}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>

                                <td>
                                    <Link to={`/updatestudent/${data._id}`} className='btn btn-primary' >Update</Link>
                                </td>

                                <td>
                                    <button className='btn btn-danger' onClick={()=> deleteStudent(data._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div>
            <button className='btn btn-success float-right' onClick={()=>{navigate('/studententry')}}>New Student Entry</button> 
            </div>
    </div>

  )
}

export default StuddentPanel