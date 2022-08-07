import React, { useState } from "react"

const AddTodo = ({
    handleAdd
})=> {

    const [text, setText] = useState("")

    const handleChange = e =>{
        setText(e.target.value)
    }

    const handleSubmit= ()=> {
        handleAdd(text)
    }
    return (
        <div>
            <div>
                <input onChange={handleChange} placeholder="Add something" />
                <button onClick={handleSubmit} >ADD</button>
            </div>
        </div>
    )
}

export default AddTodo