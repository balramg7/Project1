import './App.css';
import InputBox from './component/inputComponent';
import Form from './component/formComponent';
import Header from './component/headerComponent';
import Detail from './component/detailEmployees';
import {useEffect, useState} from 'react';
import {getEmployeesFromFirebase} from './service/employeeService';

  function App() {
    const [employees, setemployees] = useState([])
    const [isUpdateRequired, setUpdateRequired] = useState(true);

    const addEmployeeFromForm = (employee) => {
        setemployees([...employees, employee])
    }
    useEffect(() => {
      if(isUpdateRequired)
      getEmployeesFromFirebase()
          .then(employees => setEmployees(employees))
      setUpdateRequired(false);
  }, [isUpdateRequired])



  return (
    <>
    <Header></Header>
    <div className="container-fluid mt-4">
                <div className="row">
                <Form addEmployeeFromForm ={addEmployeeFromForm} setUpdateRequired={setUpdateRequired}/>
                    <Detail employee={employee}></Detail>
                </div>
            </div>
    <InputBox></InputBox>
    </>
    
  );
}

export default App;
