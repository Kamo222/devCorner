import React, { useContext } from "react";
import Blogs from "./Blogs";
import { useState } from "react";
import { BlogsContext } from "./context";

const BlogView = () => {
    
    return ( 
        <div className="blogView">
            <Blogs />
        </div>
     );
}
 
export default BlogView;