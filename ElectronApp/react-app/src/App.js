
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Java</h1>
//       <Button>Hello</Button>
//     </div>
//   );
// }

// export default App;
import Options from './components/Options'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { useState } from "react";
import '../src/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [heading, setHeading] = useState('Java')
  const [time, setTime] = useState(0);
    return (
      <div>
        <div className="grid">
          <Options langugae='Java' setHeading={setHeading}/>
          <h1 className="heading">{heading}</h1>
        </div>

        <div className="grid">
          <Options langugae='Python' setHeading={setHeading}/>
          <h3 className="results">Time (ms): {time}ms</h3>
        </div>
        
        <div className="grid">
          <Options langugae='J.S' setHeading={setHeading}/>
          <a href="" className="results"><h4>Click to view Data</h4></a>
        </div>

        <Stack>
          <Options langugae='C#' setHeading={setHeading}/>
          <Button onClick={() => {
            switch(heading){
                case 'Python':
                  fetch('http://localhost:5000')
                  .then(response => response.json())
                  .then(data => { console.log(data); setTime(data['time'])});
                  break;
                case 'Java':
                  fetch('http://localhost:8080')
                  .then(response => response.json())
                  .then(data => {console.log(data); setTime(data['time'])})
            }
            }}>Run</Button>
        </Stack>

      </div>
        
    );
  }
  
  export default App;
  