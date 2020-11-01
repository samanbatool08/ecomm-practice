import './App.css';
import Header from './Header';
import Items from './Items';

function App() {
  return (
    <div className="app">
      <div className='app__headline'>
      <h1> Saman's store </h1>
      <Header />
      <Items />
      </div>
    </div>
  );
}

export default App;
