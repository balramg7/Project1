import React from "react";

export default function DetailCard(props) {
    const employee = props.employeeInfo;
    return (
        <div className="col-6">
            <div
                className="card"
                style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "relative",
                }}
            >
                <span
                    style={{
                        position: "absolute",
                        top: "5px",
                        right: "15px",
                        fontWeight: "600",
                        color: "red",
                    }}
                >
                    Id No: {employee?.id??""}
                </span>
                <div
                    style={{
                        width: "100%",
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {employee?.name??""}
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Age</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{employee?.id??""}</td>
                                <td>{employee?.name??""}</td>
                                <td>{employee?.department??""}</td>
                                <td>{employee?.age??""}</td>
                                <td>{employee?.salary??""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}