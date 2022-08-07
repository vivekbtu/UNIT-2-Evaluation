import { useEffect } from "react"
import { useState } from "react"
import { addTodos, deleteTodo, getTodos, toggleTodo } from "../../api/todos";
import AddTodo from "./AddTodo"
import Pagination from "./Pagination";
import { TodoList } from "./TodoList"


function Todo(){
    const [loading, setLoading] = useState();
    const [todos, setTodos] = useState([]);
    const [titleSortBy, setTitleSortBy] = useState("ASC");
    const [page, setPage] = useState(1)

    useEffect(()=>{
       handleGetTodos()
    },[titleSortBy,page])

    const handleGetTodos= () => {
        setLoading(true)
    return getTodos({
        titleSortBy,
        page
    })
        .then(res=>{
            setLoading(false)
            // console.log(res)
            setTodos(res)
        })
        .catch(err=>{
            setLoading(false)
        })
    }

    const handleAdd = (text)=> {
        const item = {
            title: text,
            status: false
        }
        setLoading(true)
        addTodos(item)
        .then(res=>{
            // console.log(res)
            handleGetTodos()
        })
        .catch(err=>{
            setLoading(false)
        })

        
    }

    const handleToggle = (id, newStatus) => {
        setLoading(true)
        toggleTodo(id, newStatus)
        .then(res=>{
            handleGetTodos()
        })
        .catch(err=>{
            setLoading(false)
        })
    }

    const handleDelete = (id) => {
        setLoading(true)
        deleteTodo(id)
        .then(res=>{
            handleGetTodos()
        })
        .catch(err=>{
            setLoading(false)
        })
    }

    return (
        <div>
            <div>
                {loading && "Loading!"}
            </div>
            <AddTodo handleAdd={handleAdd} />
            <div>
                <button onClick={()=>setTitleSortBy(prev=>prev==="ASC"?"DESC":"ASC")} >
                  TITLE:  {titleSortBy === "ASC" ? "SHOW DESCENDING": "SHOW ASCENDING"} 
                </button>
            </div>
            <h3>PENDING</h3>
            {
                todos.filter(item=>!item.status).map(item=>
                    <TodoList 
                        key={item.id} 
                        title={item.title} 
                        status={item.status} 
                        id={item.id}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                        />)
            }
            <h3>COMPLETED</h3>
            {
                todos.filter(item=>item.status).map(item=>
                    <TodoList 
                        key={item.id} 
                        title={item.title} 
                        status={item.status} 
                        id={item.id}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                        />)
            }
            <div>
                <button onClick={()=>setPage(prev=>prev-1)} disabled={page===1} >PREV</button>
                <button>{page}</button>
                <button onClick={()=>setPage(prev=>prev+1)}>NEXT</button>
            </div>
            <Pagination total={10} current={page} onChange={(value)=>setPage(value)} />
        </div>
    )
}

export default Todo