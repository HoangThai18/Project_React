import './App.css';
import Accordian from './components/accordion/index';
import Rating from './components/rating/index';
function App() {
  return (
    <div className="App">
      {/* This is accordian */}
      <Accordian />
      {/* This is rating */}
      <Rating noOfStars={10} />
    </div>
  );
}

export default App;
