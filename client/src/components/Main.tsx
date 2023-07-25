import ProductList from './ProductList';
import Modal from './Modal';
import { useRef, useState } from 'react';

interface Props {
  filteredSearch: string[];
}

const Main = ({ filteredSearch }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [productName, setProductName] = useState<string | undefined>('');
  const [productPrice, setProductPrice] = useState<number | undefined>(0);
  const [productQuantity, setProductQuantity] = useState<number | undefined>(0);
  const [productImage, setProductImage] = useState<string | undefined>('');

  const openModal = () => {
    modalRef.current!.style.display = 'block';
  };

  const closeModal = () => {
    modalRef.current!.style.display = 'none';
    setProductName('');
    setProductPrice(0);
    setProductQuantity(0);
    setProductImage('');
  };

  return (
    <>
      <Modal
        modalRef={modalRef}
        openModal={openModal}
        closeModal={closeModal}
        button='create'
        title='Create a Product'
        productName={productName}
        setProductName={setProductName}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
        productImage={productImage}
        setProductImage={setProductImage}
      />
      <main className='min-h-[80%] flex flex-col p-4 relative'>
        <p>Welcome to John's Shop, here you can sell any products!</p>
        <div
          onClick={openModal}
          className='p-4 rounded-2xl bg-slate-600 m-4 text-center min-w-[15em] flex self-center transition-all cursor-pointer text-[#f2f2f2] relative z-10 hover:bg-slate-400'
        >
          <span>Want to add a product? Click here</span>
        </div>
        <ProductList filteredSearch={filteredSearch} />
      </main>
    </>
  );
};

export default Main;
