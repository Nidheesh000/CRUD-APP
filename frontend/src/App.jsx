import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar1 from './Navbar1';
import HeroSection from './HeroSection';
import Card1 from './Card1';
import Card2 from './Card2';
import Footer from './Footer';
import form3 from './form3';
import Login1 from './Login1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [complaints, setComplaints] = useState([]);

const[department, setDepartment] = useState("");
const[description, setDescription] = useState("");
const[image, setImage] = useState("");
{
const[isLoggedIn, setIsLoggedIn] = useState(false);
}
const addComplaint=()=>{
  const newComplaint={
    department:department,
    description:description,
    image:image
  }

  setComplaints([...complaints, newComplaint]);

}
const deleteComplaint=(index)=>{
  const updatedComplaints=complaints.filter((item, i)=>i!==index);
  setComplaints(updatedComplaints);
}

  return (
    setLoggedIn ?
    <div style={{width:"100%"}}>
    <div>
      <Navbar1></Navbar1>
      <HeroSection
      setDepartment={setDepartment}
      setDescription={setDescription}
      setImage={setImage}
      addComplaint={addComplaint}
      ></HeroSection>
      <div className='d-flex-wrap p-4 mt-3 d-flex gap-4'>
      
      {
        complaints.map((item, index)=>(
      <Card1 department={item.department}
       description={item.description}
        image={item.image}
        deleteComplaint={deleteComplaint} 
        index={index}
        ></Card1>
        ))
        }
      
      </div>
      <form3></form3>
      <Login1></Login1>
      <Footer></Footer>
    </div>
    </div>
    :
    <div>
    <Login1 setIsLoggedIn={setIsLoggedIn}/>
    <Logout1 setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default App;
