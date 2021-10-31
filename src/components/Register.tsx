import React, { createRef } from 'react'
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase'
import { Card, Button, Form } from 'react-bootstrap'

export default function Register() {
  const emailRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()
  const passwordConfirmRef = createRef<HTMLInputElement>()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, emailRef.current!.value, passwordRef.current!.value)
      console.log(user)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
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
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} />
          </Form.Group>
          <Button className="w-100" type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
