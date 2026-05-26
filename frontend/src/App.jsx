import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar1 from './Navbar1.jsx'
import HeroSection from './HeroSection.jsx'
import Card1 from './Card1.jsx'
import Footer from './Footer.jsx'

import Login1 from './Login1.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [complaints, setComplaints]=useState([]);

  const[department,setDepartment]=useState("");
  const[description,setDescription]=useState("");
  const[image,setImage]=useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

const addcomplaint=()=>{
  const newComplaint={
    department:department,
    description:description,
    image:image
  }
  setComplaints([...complaints,newComplaint]);
}
const deleteComplaint=(index)=>{
  const updatedComplaints=complaints.filter((item,i)=> i !==index);
  setComplaints(updatedComplaints);
}



  return (
    isLoggedIn ? 
   <div>
    
    <Navbar1
     setIsLoggedIn={setIsLoggedIn}>

    </Navbar1>
    <HeroSection 
    setDepartment={setDepartment}
    setDescription={setDescription}
    setImage={setImage}
    addcomplaint={addcomplaint}
    ></HeroSection> 
    <div className='d-flex flex-wrap justify-content-center gap-3'>
{
    complaints.map((items,index)=>(
        <Card1
        department={items.department}
        description={items.description}
        image={items.image}
        deleteComplaint={deleteComplaint}
        index={index}
        ></Card1> 
        
     ))
     }
</div>
    <Footer>
    
    </Footer>
    
    <Login1>
      </Login1>    
   </div>
:  
   <Login1
    setIsLoggedIn={setIsLoggedIn}
  />
    )            
}

export default App