import './App.css';
import Sidebar from './components/Layout/Sidebar/Sidebar';
import Main from './components/Layout/Main/Main';
function App() {
  return (
    <div className='main'>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
