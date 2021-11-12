import { Button } from 'react-bootstrap';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import UploadForm from '../components/UploadForm';
import ImageGrid from '../components/ImageGrid';

function Home(props: any) {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
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
      <ImageGrid />
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
      <UploadForm style={{ margin: '4px' }}>Select Image</UploadForm>
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
