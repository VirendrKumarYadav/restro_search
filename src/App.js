import logo from './logo.svg';
import './App.css';
import Header from './componant/Header/Header'
import Footer from './componant/Footer/Footer'
import Main from './componant/main/Main'
import data from './lib'

function App() {
  return (
    <div className="App">
   <Header/>
    <Main jsonData={data}/>


  <Footer/>
    </div>
  );
}

export default App;
