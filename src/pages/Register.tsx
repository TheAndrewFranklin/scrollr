import { createRef, SyntheticEvent } from 'react';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase';
import { Card, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Register() {
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const passwordConfirmRef = createRef<HTMLInputElement>();
  const history = useHistory();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value,
      );
      history.push('/login');
      console.log(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} />
          </Form.Group>
          <Button className="w-100" type="submit">
            Register
          </Button>
          <Link to="/login">Go To Login</Link>
        </Form>
      </Card.Body>
    </Card>
  );
}
