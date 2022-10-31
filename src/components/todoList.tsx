import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';
import {addTodo, deleteTodo} from "../slices/todoSlice";
import {useSelector} from "react-redux";
import {store} from "./store"
import "../css/toDo.css";

export default function ToDoForm() {

    const [toDo, setToDo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleDelete = () => {
        dispatch(deleteTodo(toDo.id));
    }

    type RootState = ReturnType<typeof store.getState>;
    const todoList = useSelector<RootState, any>((state) => state.todo.todoList);

    const dispatch = useDispatch();

    function handleTaskInputChange(e: { target: { value: any; }; }) {
        setToDo({...toDo, task: e.target.value});
    }

    function handleSubmit() {
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
            <form>
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
                        onClick={handleSubmit}
                    >
                        Add Task
                    </span>
                </div>
            </form>
            <div className="toDoDisplay">
                <ul>
                    {todoList?.map(() => (
                        <div className="toDoItem">
                            <li>
                                <text
                                    className="taskText"
                                >
                                    {toDo.task}
                                </text>
                                <span
                                    className="deleteTask"
                                    onClick={handleDelete}
                                >
                    x
                </span>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
