
import NavBar from './compents/NavBar';
import Blog from './compents/Blog';
import Blogs from './compents/Blogs';
import Home from './compents/Home';
import { Route, Routes } from 'react-router-dom'; 
import BlogView from './compents/BlogView';
import BlogPage from './compents/BlogPage';
import { useState } from 'react';
import { createContext } from 'react';
import { BlogsContext } from './compents/context';
import LoginModal from './compents/LoginModal';
import { ProfileIconContext } from './compents/profileIconContext';


function App() {
  
  const [blogs, setBlogs ] = useState([
    {
        blogId: 1,
        blogTitle: "sdfgdfgdsfgdfgdfgdsfg",
        blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad?",
        blogAuthor: "Author 1",
        link: "www.whatever.com",
        picture: "assets/pexels-christina-morillo-1181676.jpg"
    },
    {
        blogId: 2,
        blogTitle: "Title2",
        blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad?",
        blogAuthor: "Author 2",
        link: "www.whatever.com",
        picture: "assets/pexels-christina-morillo-1181676.jpg"
    },
    {
        blogId: 3,
        blogTitle: "Title3",
        blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad?",
        blogAuthor: "Author 3",
        link: "www.whatever.com",
        picture: "assets/pexels-christina-morillo-1181676.jpg"
    },
    {
        blogId: 4,
        blogTitle: "Title4",
        blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad?",
        blogAuthor: "Author 4",
        link: "www.whatever.com",
        picture: "assets/pexels-christina-morillo-1181676.jpg"
    },
    {
        blogId: 5,
        blogTitle: "Title5",
        blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad?",
        blogAuthor: "Author 5",
        link: "www.whatever.com",
        picture: "assets/pexels-christina-morillo-1181676.jpg"
    },
    {
        blogId: 6,
        blogTitle: "Title 6",
        blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta minus praesentium illum distinctio labore sequi rem aut sint vero totam, architecto maiores molestias a nobis officiis nostrum minima ad?",
        blogAuthor: "Author 6",
        link: "www.whatever.com",
        picture: "assets/pexels-christina-morillo-1181676.jpg"
    }
]);

const [isProfileClickedOn, setIsProfileClickedOn] = useState(false);
  
  return (
    <div className="App">
      <BlogsContext.Provider value={blogs}>
      <ProfileIconContext.Provider value={isProfileClickedOn}>
          <NavBar isProfileClickedOn={isProfileClickedOn} setIsProfileClickedOn={setIsProfileClickedOn}/>
          <LoginModal isProfileClickedOn={isProfileClickedOn} setIsProfileClickedOn={setIsProfileClickedOn}/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blogs' element={<BlogView />} />
            <Route path='/blog/:id' element={<BlogPage />} />
          </Routes>
        </ProfileIconContext.Provider>
      </BlogsContext.Provider>
    </div>
  );
}

export default App;


/* 

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}


*/