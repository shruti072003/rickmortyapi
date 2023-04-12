import './App.css';
import logo1 from './assets/logo1.png';
import ListaPersonajes from './components/ListaPersonajes';

function App() {
  return (
    <div className='flex flex-col'>
      <div>
        <img src={logo1} className='logo'/>
      </div>
      <div className='p-10'>
        <ListaPersonajes />
      </div>
    </div>
  );
}

export default App;
