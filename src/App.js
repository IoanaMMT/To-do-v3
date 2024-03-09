import logo from './logo.svg';
import './App.css';
import DenseAppBar from './Components/Navigation';
import TaskFields from './Components/App-body';
import DisplayHeather from './Components/Heather';

function App() {
  return (
    <>
    <div className='container'>
      <DenseAppBar/>
      <DisplayHeather/>
      <TaskFields/>
    </div>
    </>
  );
}

export default App;
