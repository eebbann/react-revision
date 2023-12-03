import React, {useState, useEffect} from 'react'
import axios from 'axios'
function RunOnce() {
	const [post, setPost] = useState({});
	const [id,setId] = useState(1);

useEffect(()=>{
	axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
	 .then(res => { console.log(res.data)
	   setPost(res.data)
	})
	 .catch(err=> console.log(err))
},[id])

	return (
		<div>
	 <input type="text" value={id} onChange={e=>setId(e.target.value)} />
	 <h1>{post.id}-{post.title}</h1>
		{/* <ol>
			{post.map((posts)=> ( 
				<li key={posts.id}>{posts.title}</li>
				))
		}
		</ol> */}
		
		</div>
	)
}

export default RunOnce