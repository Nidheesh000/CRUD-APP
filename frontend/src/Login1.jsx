

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Login1(props) {
  return (
    <div className="d-flex justify-content-center align-items-center bg -light" 
    style={{height:"100vh"}}>
      <div className="bg-white p-4 rounded shadow"
      style={{width:"400px"}}>
<h1>Campus Complaint </h1>

        <input type="text" placeholder="Username" className="form-control mb-3" />
        <input type="text" placeholder="Password" className="form-control mb-3" />
        <Button variant="primary" onClick={() => props.setIsLoggedIn(true)}>Login</Button>
      </div>
    </div>
  );
}

export default Login1;
