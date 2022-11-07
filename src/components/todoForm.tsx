import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';
import {addTodo} from "../slices/todoSlice";
import "../css/toDo.css";

export default function ToDoForm() {

    const [toDo, setToDo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const dispatch = useDispatch();

    function handleTaskInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setToDo({...toDo, task: e.target.value});
    }

    function handleTaskAdd() {
        if (toDo.task.trim()) {
            dispatch(addTodo({
                id: uuid(),
                task: toDo.task,
                time: new Date().toLocaleString()
            }));
        }
        setToDo({...toDo, task: ""});
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (toDo.task.trim()) {
            dispatch(addTodo({
                id: uuid(),
                task: toDo.task,
                time: new Date().toLocaleString()
            }));
        }
        setToDo({...toDo, task: ""});

    }

    return (
        <div className="toDoList">
            <h2>To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="addTaskText"
                        type="text"
                        placeholder="Write your task here.."
                        value={toDo.task}
                        onChange={handleTaskInputChange}
                    />
                    <span
                        className="addTaskButton"
                        onClick={handleTaskAdd}
                    >
                        Submit
                    </span>
                </div>
            </form>
        </div>
    );
}
