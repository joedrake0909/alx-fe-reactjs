import './App.css'
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: 'John Doe', email: 'jane.doe@gmail.com' };

  return (
    <>
      <UserContext.Provider value ={userData}>
        <ProfilePage />
      </UserContext.Provider>
    </>
  )

}

export default App;