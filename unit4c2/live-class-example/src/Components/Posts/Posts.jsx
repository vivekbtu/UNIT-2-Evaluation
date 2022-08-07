import { useState } from "react";
import { useEffect } from "react";
import PostItem from "./PostItme";

function getData({page}){

    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    .then(res=>{
        return res.json()
    })
   
}

function Posts(){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect (()=>{
        handleFetchData(page)
    },[page])

    const handleFetchData = async(page=1)=> {
        try{
            setLoading(true)
            const data = await getData({page});
            setPosts(data)
            setLoading(false)
        }
        catch(err){
            setLoading(false)
            console.log(err);
        }
    }

    const handlePageChange = (changeBy)=>{
        setPage(page+changeBy)
    }

    if(loading){
        return <h3>Loading</h3>
    }
    return (
        <div>
            <h3>Posts</h3>
            <ul>
                {posts.map(item=><PostItem title={item.title} id={item.id} key={item.id} />)}
            </ul>
            <button onClick={()=>handlePageChange(-1)} disabled={page===1} >PREV</button>
            <button>{page}</button>
            <button onClick={()=> handlePageChange(1)} >NEXT</button>
        </div>
    )
}

export default Posts