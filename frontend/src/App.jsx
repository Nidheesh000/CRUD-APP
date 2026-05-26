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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [complaints, setComplaints] = useState([]);

const[department, setDepartment] = useState("");
const[description, setDescription] = useState("");
const[image, setImage] = useState("");

const addComplaint=()=>{
  const newComplaint={
    department:department,
    description:description,
    image:image
  }
  setComplaints([...complaints, newComplaint]);

}

  return (
    <div>
      <Navbar1></Navbar1>
      <HeroSection
      setDepartment={setDepartment}
      setDescription={setDescription}
      setImage={setImage}
      addComplaint={addComplaint}
      ></HeroSection>
      <div className='d-flex justify-content-around mt-5'>
      
      {
        complaints.map((item, index)=>(
      <Card1 department={item.department} description={item.description} image={item.image} ></Card1>
        ))}
      
      </div>
      <form3></form3>
      <Footer></Footer>
    </div>
  )
}

export default App
