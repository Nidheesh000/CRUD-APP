import { useState } from 'react'; 
import axios from 'axios';
import { Button } from 'react-bootstrap';



function Login1(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://crud-app-te2u.onrender.com/login', { username:username, password: password });
      if (response.status === 200) {
        props.setIsLoggedIn(true);
      }
    } catch (error) {
      alert("invalid username or password.Try again!");
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://crud-app-te2u.onrender.com/register', { username:username, password: password });
      if (response.status === 200) {
        alert("Account created successfully! You can now log in.");
        setIsRegistering(false);
      }
    } catch (error) {
      alert("Failed to create account.");
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg -light" 
    style={{height:"100vh"}}>
      <div className="bg-white p-4 rounded shadow"
      style={{width:"400px"}}>
<h1 className="text-center mb-4">{isRegistering ? "create account" : "Welcome back"}</h1>

        <input type="text" placeholder="Username" className="form-control mb-3" onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder="Password" className="form-control mb-4" onChange={(e) => setPassword(e.target.value)} />
        {isRegistering ? (
           <Button className="btn btn-success w-100 mb-3" onClick={handleRegister}>sign up</Button>
         
        ) : (
        <Button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</Button>
        )}
        <div className="text-center mt-3">
          {isRegistering ? (
            <p>
              Already have an account?
              <span className="text-primary" style={{cursor:"pointer", textDecoration:"underline"}} onClick={() => setIsRegistering(false)}>Login in here</span>
            </p>
          ) : (
            <p>
              Don't have an account?
              <span className="text-primary" style={{cursor:"pointer", textDecoration:"underline"}} onClick={() => setIsRegistering(true)}>Register here</span>
            </p>
          )};
        </div>
      </div>
    </div>
  );
}

export default Login1;