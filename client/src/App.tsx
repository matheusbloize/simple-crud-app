import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { useQuery } from 'react-query';
import { api } from './api/api';
import { useEffect, useState } from 'react';

function App() {
  const [search, setSearch] = useState<string>('');
  const [products, setProducts] = useState<string[]>(['']);
  const { data } = useQuery('products', api.getProducts);

  useEffect(() => {
    data?.map((product) => {
      setProducts((prev) => [...prev, product.name]);
    });
  }, [data]);

  const filteredSearch =
    search.length > 0 ? products.filter((product) => product.toString().toLowerCase().includes(search)) : null;

  return (
    <>
      <Header setSearch={setSearch} />
      <Main filteredSearch={filteredSearch!} />
      <Footer />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;

