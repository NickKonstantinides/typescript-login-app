import React from "react";
import "../css/toDo.css";
import {useSelector} from "react-redux";
import {store} from "./store";
import TodoItem from "./todoItem";

export default function ToDoList() {

    type RootState = ReturnType<typeof store.getState>;
    const todoList = useSelector<RootState, any>((state) => state.todo.todoList);


    return (
        <div className="toDoDisplay">
            <ul>
                {todoList?.map((toDoItem: { id: React.Key | null | undefined; task: string }) => (
                    <TodoItem
                        toDo={toDoItem}
                    />
                ))}
            </ul>
        </div>
    );
}