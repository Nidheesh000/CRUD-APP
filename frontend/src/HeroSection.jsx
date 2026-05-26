function HeroSection(props){
 return(
    
 <div className='text-center p-5 bg-light'>
 <h1>Campus Complaint Box</h1>
 <p>Report campus issues easily .</p>
 <input type='text' placeholder='Department Name' className='form-control mb-3' onChange={(e)=>props.setDepartment(e.target.value)}/>
 <input type='text' placeholder='Complaint Description' className='form-control mb-3'onChange={(e)=>props.setDescription(e.target.value)}
/>
 <input type='text' placeholder='Image URL' className='form-control mb-3' onChange={(e)=>props.setImage(e.target.value)}/>
 <button className='btn btn-dark mt-3' onClick={props.addComplaint}>Submit</button>
 </div> 

    );  
}
export default HeroSection;