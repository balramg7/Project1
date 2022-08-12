import React, { useState } from "react";
import InputBox from "./inputComponent";

const Form = () => {
    let [employee, setEmployee] = useState({
        id: null,
        name: null,
        age: null,
        dept: null,
        salary: null,
    })
    const addEmployee = () => {
        console.log(employee)
    }
    const handleInputChange = (event) => {
        setEmployee(() => ({...employee, [event.target.id]: event.target.value}));
    }
    console.log(employee);
    return(
        <div className="col-3">
            <form onSubmit={addEmployee}>
                <div className="form-group">
                    <div className="row">
                        <InputBox
                        id="id"
                        placeholder="ID"
                        type="number"
                        value={employee.id}
                        handleInputChange={handleInputChange}
                        />
                        <InputBox
                        id="name"
                        placeholder="Name"
                        value={employee.name}
                        handleInputChange={handleInputChange}
                        />
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <label htmlFor="course">Department:</label>
                            <input
                            type="text"
                            className="form-control"
                            id="dept"
                            placeholder="Department"
                            value={employee.dept ?? ""}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="age">AGE</label>
                            <input
                            type="number"
                            className="form-control"
                            id="age"
                            placeholder="AGE"
                            value={employee.age ?? ""}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="salary">  SALARY</label>
                            <input
                            type="number"
                            className="form-control"
                            id="salary"
                            placeholder="SALARY"
                            value={employee.salary ?? ""}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="container"></div>
                        <button className="btn btn-success mt-4 ps-5 pe-5">
                            ADD
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};


    export default Form;