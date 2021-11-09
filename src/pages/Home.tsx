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

  const handleClick = () => {
    console.log(auth.currentUser)
  }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
      <Button onClick={handleLogout} style={{margin:'4px'}}>Logout</Button>
      <Button onClick={handleClick} style={{margin:'4px'}}>Print User</Button>
    </div>
  )
}
