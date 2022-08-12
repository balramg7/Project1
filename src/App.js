import './App.css';
import InputBox from './component/inputComponent';
import Form from './component/formComponent';
import Header from './component/headerComponent';
import Detail from './component/detailEmployees';

  function App() {
    const employee = [
        {
            id: 1,
            name: "Rajkumar",
            department: "Making",
            age: 25,
            salary: 10000,
        },
        {
          id: 2,
          name: "Govind",
          department: "Packing",
          age: 24,
          salary: 14000,
        },
    ];
  return (
    <>
    <Header></Header>
    <div className="container-fluid mt-4">
                <div className="row">
                    <Form></Form>
                    <Detail employee={employee}></Detail>
                </div>
            </div>
    <InputBox></InputBox>
    </>
    
  );
}

export default App;
