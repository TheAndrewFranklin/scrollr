import { Button } from 'react-bootstrap';
import { auth } from '../firebase';
import { connect } from 'react-redux';

function Home(props: any) {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    console.log(auth.currentUser);
  };

  const increment = () => {
    props.dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    props.dispatch({ type: 'DECREMENT' });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <h2>Counter</h2>
      <div
        style={{
          display: 'flex',
          width: '120px',
          justifyContent: 'space-between',
        }}
      >
        <Button onClick={decrement}>-</Button>
        <h2>{props.count}</h2>
        <Button onClick={increment}>+</Button>
      </div>
      <Button onClick={handleLogout} style={{ margin: '4px' }}>
        Logout
      </Button>
      <Button onClick={handleClick} style={{ margin: '4px' }}>
        Print User
      </Button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.count,
});
export default connect(mapStateToProps)(Home);
