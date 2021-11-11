import { createRef, SyntheticEvent } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase';
import { Card, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function Login() {
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const history = useHistory();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value,
      );
      history.push('/home');
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
          <Button className="w-100" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
