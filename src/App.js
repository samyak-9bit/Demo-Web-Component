import './App.css';
import DemoComponent from './DemoComponent';

function App() {
  return (
    <>
    <h1>First Web Component</h1>
    
    <DemoComponent/>

    <br></br>

    <demo-component title="Enter the title Here" label="Enter the label Here"></demo-component>

    
    </>
  );
}

export default App;
