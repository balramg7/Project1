import React,  {useState} from "react";
import DetailCard from "./detailCardComponent";

export default function Detail(props) {
    const [dropdown, setDropdown] = useState("all")
    const handleFilterValueChange = (event) => {
        setDropdown(event.target.value);
    };
    return (
        <div className="col-9">
        <div style={{width: "200px"}} className="mt-2">
            <select
                className="form-select"
                style={{marginLeft: "70px"}}
                name="filter"
                id="filter"
                onChange={handleFilterValueChange}
            >
                <option value="all">All</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
            </select>
        </div>
        <div className="row mt-4">
            {props.employees.filter(employee => {
                if (dropdown === "pass")
                    return employee?.salary <= 20000 && employee?.age >18
                else if (dropdown === "fail")
                    return employee?.salary > 20000 || employee?.age < 18
                else return true;
            })
               .map(employee => <DetailCard key={employee.id} employeeInfo={employee}/>)}
    </div>
    </div>
    );
}
