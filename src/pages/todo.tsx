import ToDoForm from '../components/todoForm';
import ToDoList from "../components/todoList";
import React from "react";

export default function Todo() {
    return (
        <div className="ToDoList">
            <ToDoForm/>
            <ToDoList/>
        </div>
    );
}