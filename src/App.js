import './App.css';
import People from './components/People';
import Input from './components/Input';


const App = () => {
  return (
    <div className="App">
		  <p>People</p>
		  <Input />
		  <People />
    </div>
  );
}

export default App;
