import React from "react";
import { useState } from "react";

const Blog = ({color, blog}) => {

    const [ blogId, setBlogId ] = useState(blog.blogId);
    const [ blogPicture, setBlogPicture ] = useState(blog.picture);
    const [ blogTitle, setBlogHeading ] = useState(blog.blogTitle);
    const [ blogtext, setBlogText ] = useState(blog.blogText);
    const [ blogAuthor, setBlogAuthor ] = useState(blog.blogAuthor);

    const [hover, setHover] = useState(false);

    const styling = {
        backgroundColor: hover ? "#183446" : color
    }

    const onMouseEnterHandler = (event) => {
        event.target.style.backgroundColorHover = "#183446";
    }

    const onMouseLeaveHandler = (event) => {
        event.target.style.backgroundColor = color;
    }

    /* 

Colors

022f40
38aecc
0090c1
183446
046e8f

*/

    return ( 
        <>
            <div id={blogId} className='blog' style={styling} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <img src={blogPicture}  />
              <div>
                <h2 className='blog-heading'>{blogTitle}</h2>
                <p className='blog-text'>{blogtext}</p>
                <p className="blog-author">{blogAuthor}</p>
              </div>
            </div>
        </>
     );
}
 
export default Blog;