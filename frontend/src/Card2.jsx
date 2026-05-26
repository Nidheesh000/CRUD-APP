import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1403358675/vector/males-hand-holding-mobile-phone-with-no-wifi-signal.jpg?s=612x612&w=0&k=20&c=bxMLQDUQp9A2mA4AC5XblJSu2dmNBogMzQ7NUJyU87Q=" />
      <Card.Body>
        <Card.Title>Computer Science Department</Card.Title>
        <Card.Text>
          WIFI is not working properly in the lab.
        </Card.Text>
        <Button variant="primary">View Complaint</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;