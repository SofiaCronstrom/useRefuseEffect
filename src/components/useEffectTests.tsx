import { useEffect, useState } from "react";

interface IDataModel {
 userId: number,
 id: number,
 body: string,
 title: string
}

export default function Effects () {
    const [data, setData] = useState<IDataModel[]>([])
    //Fetching api using useEffect
    useEffect(() => {
     const getPost = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const json = await response.json() as IDataModel[];
          if (response.ok) setData(json)
     }
     getPost();
     
    }, [data]);

    return (
        <div className="body">{
            data.map(post => <div className="container" key={post.id}>
                <div className="card-body">
                  <div>Post number: {post.id}</div>
                  <div className="title">{post.title}</div>
                  <div>{post.body}</div>
                </div>
            </div>)
          }</div>
    );
}