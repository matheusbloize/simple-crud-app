import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ToastContainer
        autoClose={3000}
      />
    </>
  );
}

export default App;

