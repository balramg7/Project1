import React from "react";

export default function InputBox(props){
    let key = props.id??"";
    let placeholder = props.placeholder??"";
    let type = props.type??"text";
    let handleInputChange = props.handleInputChange;
    let value = props.value??"";
    return(
        <div className="col-6">
            <label htmlFor={key}>{placeholder}:</label>
            <input
            type={type}
            className="form-control"
            id={key}
            placeholder={placeholder}
            value={value}
            onChange={(event) => handleInputChange(event)}
            />
        </div>
    )
}