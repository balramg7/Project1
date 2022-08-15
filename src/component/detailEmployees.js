import React, {useState} from "react";
import DetailCard from "./detailCardComponent";

export default function Detail(props) {
    
    return (
        <div className="row mt-4">
        .map(employee ={">"}  <DetailCard key={employee.id} employeeInfo={employee}/>)
    </div>
    );
}