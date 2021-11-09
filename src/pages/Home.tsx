import { Button } from "react-bootstrap";
import { auth } from "../firebase";

export default function Home() {

  const handleLogout = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}
