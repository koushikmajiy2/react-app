// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>

<Navbar  aboutUS="About"/>  

<div className="container my-3">
{/* <TextForm/> */}
</div>
<About/>
<Footer/>
  </>
  );
}
export default App;
     