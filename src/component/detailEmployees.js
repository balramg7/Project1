import React, { useCallback } from "react";
import DetailCard from "./detailCardComponent";

export default function Detail(props) {
    
    return (
        <div className="row mt-4">
            {props.employees.filter(_employee => {
                return useCallback;
            })
        .map(employee => <DetailCard key={employee.id} employeeInfo={employee}/>)}
    </div>
    );
}