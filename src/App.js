import './App.css';
import Form from './component/formComponent';
import Header from './component/headerComponent';
import Detail from './component/detailEmployees';
import {useEffect, useState} from 'react';
import {getEmployeesFromFirebase} from './service/employeeService';
import DetailCard from './component/detailCardComponent';

  function App() {
    const [employees, setEmployees] = useState([])
    const [isUpdateRequired, setUpdateRequired] = useState(true);

    const addEmployeeFromForm = (employee) => {
        setEmployees([...employees, employee])
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
                    <Detail employees={employees}/>
                </div>
                <br />
                <DetailCard></DetailCard>
            </div>
    
    </>
    
  );
}

export default App;
