//2b
import Bonus from "./bonus/Bonus";
import Exercise from "./exercise/Exercise";


function App() {
  return (
    //2c
    <div>
    <Exercise/>
    {/* 3a */}
    <Exercise good="Awesome" bad="Terrible" />
    <Bonus/>
    </div>
  );
}

export default App;
