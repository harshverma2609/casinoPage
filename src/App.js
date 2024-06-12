import Heading from './components/Heading';
import Heading2 from './components/Heading2';
import EndOfpage from './components/EndOfPage';
import MidPage from './components/MidPage';
import './App.css';

function App() {
  return (
    <div className="gamePage">
      <Heading/>
      <Heading2/>
      <MidPage/>
      <EndOfpage/>
    </div>
  );
}

export default App;
