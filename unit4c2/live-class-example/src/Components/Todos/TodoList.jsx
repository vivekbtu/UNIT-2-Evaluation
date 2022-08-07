
import React from "react"

export const TodoList = ({
    title,
    status,
    id,
    handleToggle,
    handleDelete
}) => {
    return (
        <div style={{
            display:"flex",
            gap:"1rem",
            justifyContent: "space-between"
        }} >
            <b>{title}</b>{status? "DONE":"NOT DONE"}
            <button onClick={()=>handleToggle(id, !status)} >TOGGLE STATUS</button>
            <button onClick={()=>handleDelete(id)} >DELETE</button>
        </div>
    )
}