import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const  Blog = ()=>{
    useEffect(()=>{
        (async ()=>{
          let resp = await fetch("https://jsonplaceholder.typicode.com/todos")
          let data = await resp.json()
          console.log(data)
          setPost(data)
        })();
    },[])
    const [Post, setPost] = useState([]);
    return (
        <>
            {Post.map(item =>{
                return (
                        <>
                             <Link><h1 key={item.id} >{item.title}</h1></Link> 
                        </>
                     ) 
            })}
            
        </>
    )
}
export default Blog