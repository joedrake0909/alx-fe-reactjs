import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';



function App() {

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />


      <UserProfile 
      name="Joseph"
      age="30"
      bio="Software developer with a passion for creating innovative solutions."
      />
    </>

  
    

    


  )
}

export default App;