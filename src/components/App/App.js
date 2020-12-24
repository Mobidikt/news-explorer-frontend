// import logo from './logo.svg';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';

function App() {
  return (
    <div className='App'>
      <Header />
      <SearchForm />
      <About />
      <Footer />
    </div>
  );
}

export default App;
