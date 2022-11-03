import React from "react";
import "../css/toDo.css";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../slices/todoSlice";

export default function TodoItem(props: {toDo: {id: string, task: string}}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(props.toDo.id));
    }

    return(
        <div className="toDoItem">
            <li>
                <text
                    className="taskText"
                >
                    {props.toDo.task}
                </text>
                <span
                    className="deleteTask"
                    onClick={handleDelete}
                >
                    x
                </span>
            </li>
        </div>
    );
}