import React from "react";
import { useParams } from "react-router-dom";
import { BlogsContext } from "./context";
import { useState } from "react";
import { useContext } from "react";
import { Accordion, AccordionSummary, ExpandMoreIcon, Typography, AccordionDetails } from "@mui/material";


const BlogPage = () => {
    const blogs = useContext(BlogsContext)
    const {id} = useParams(); 
    const [blog, setBlog] = useState(blogs.filter((blog) => blog.blogId == id));
    console.log("blogPage",blog);
    return ( 
        <div className="blog-page" >
            
            <div className="blog-banner" >
                
                <h1 className="banner-heading">{blog[0].blogTitle}</h1>
                <p className="banner-author">{blog[0].blogAuthor}</p>
            </div>
            <div className="blog-sections">
                <div className="sidebar">
                    <span className="sidebar-items"></span>
                    <span className="sidebar-items"></span>
                    <span className="sidebar-items"></span>
                    <span className="sidebar-items"></span>
                </div>
                <p className="blog-page-text">{blog[0].blogText}</p>
                <div className="sidebar2">
                <span className="sidebar-items"></span>
                    <span className="sidebar-items"></span>
                    <span className="sidebar-items"></span>
                    <span className="sidebar-items"></span>
                </div>
            </div>
        </div>
     );
}
 
export default BlogPage;