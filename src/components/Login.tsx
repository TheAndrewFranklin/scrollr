import React, { createRef } from 'react'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase'
import { Card, Button, Form } from 'react-bootstrap'

export default function Login() {
  const emailRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
      console.log(user)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  const handleClick = () => {
    console.log(auth.currentUser)
  }

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
          <Button className="w-100" type="submit">Submit</Button>
        </Form>
        <Button onClick={handleClick}>Print User</Button>
      </Card.Body>
    </Card>
  )
}
