import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Blogs() {
    const { posts, loading } = useContext(AppContext);

    return (
    
    <div>

            {
                loading ? (<Spinner></Spinner>) : (
                    
                        posts.length === 0 ?
                            (
                                <div>
                                    <p>No post Found </p>
                                </div>
                                ) :
                                (posts.map((post) => (
                                    <div>
                                        <p>{post.title}</p>
                                        <p>
                                            By <span>{post.category}</span>
                                        </p>
                                        <p>Posted on {post.date}</p>
                                        <p>{post.content}</p>  
                                        <div>
                                            {post.tags.map( (tag) => {
                                                  
                                            })}
                                        </div>
                                    </div>

                                    
                                )))
                            
                    
                )
            }



        </div>)



        
    
}



export default Blogs;
