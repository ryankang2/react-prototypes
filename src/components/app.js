import React from "react";
import Table from "./table";

function App(){
    return <h1> My first React functional component </h1>;
}

export default () => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

const students = [
    {
        name: "Phil",
        course: "CSE1",
        grade: 99,
    },
    {
        name: "Kevin",
        course: "Literature",
        grade: 90,
    },
    {
        name: "Hon",
        course: "Math",
        grade: 11,
    }
];
