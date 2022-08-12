import React from "react";
import DetailCard from "./detailCardComponent";

export default function Detail(props) {
    return (
        <div className="row mt-4">
        <DetailCard employeeInfo={props.employee[0]}/>
        <DetailCard employeeInfo={props.employee[1]}/>
        <DetailCard employeeInfo={props.employee[2]}/>
        <DetailCard employeeInfo={props.employee[3]}/>
        <DetailCard employeeInfo={props.employee[4]}/>
        <DetailCard employeeInfo={props.employee[5]}/>
    </div>
    );
}