
import './App.scss';
import CountDown from './components/CountDown/CountDown';
import DigitalClock from './components/DigitalClock/DigitalClock';

function App() {
  return (
    <div className="App">
     <DigitalClock />
     <CountDown />
    </div>
  );
}

export default App;
