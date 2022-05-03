import './App.css';
import React from 'react'
import StuddentPanel from './Components/StuddentPanel';
import StudentEntry from './Components/StudentEntry';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpdateStudent from './Components/UpdateStudent';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes >
        <Route path='/' element={<StuddentPanel />} />
        <Route path='/studententry' element={<StudentEntry />} />
        <Route path='/updatestudent/:studentId' element={<UpdateStudent />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
