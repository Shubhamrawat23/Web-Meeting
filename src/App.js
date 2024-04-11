import './App.css';
import { DataProvider } from './Context/Context.js';
import Demo from './Demo/Demo.js';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Demo />
      </div>
    </DataProvider>
  );
}

export default App;
