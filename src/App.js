


//Styles
import './App.css';
//Components
import Header from './components/Header/index.js';
import HeroPage from './components/Heropage';  

import Logo from './hero.png'
function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage Src = {Logo}/>
      <img src="logo.svg" alt="react" />
    </div>
  );
}

export default App;
