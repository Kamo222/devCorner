import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BlogsContext } from "./context";

const Blogs = () => {
    const [blogs, setBlogs] = useState(useContext(BlogsContext));
    
    const [ backgroundColors, setBackgroundColors ] = useState({
        firstColor: "#38aecc",
        secondColor: "#ba1f33",
        thirdColor: "#0090c1",
        fourthfirstColor: "#183446",
        fifthColor: "#046e8f"
    })

    const [colors, setColors] = useState(["#38aecc", "#ba1f33", "#0090c1", "#183446", "#046e8f"]);

    // const [blogs, setBlogs ] = useState(blogs);

    const randomColor = () => {
        // for(let i = 0; i < 20; i++){
        //     let counter = 0;

        // }

        return colors[Math.floor(Math.random() * 6)];
    }
    
    return ( 
        <>
            <div className='blogs' >
                {
                    blogs.map((blog) => {
                       let counter = -1;
                       counter++;
                       return (
                        <Link to={"/blog/" + blog.blogId}>
                            <Blog blog={blog} color={colors[Math.floor(Math.random() * colors.length)]}/>
                        </Link>
                       )
                       
                    })
                }
                
                {/* <Blog color={backgroundColors.secondColor}/>
                <Blog color={backgroundColors.thirdColor}/>
                <Blog color={backgroundColors.fourthColor}/>
                <Blog color={backgroundColors.fifthColor}/> */}
            </div>
        </>
     );
}
 
export default Blogs;