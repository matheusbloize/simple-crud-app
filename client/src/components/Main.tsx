import { useRef } from 'react';
import ProductList from './ProductList';

const Main = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    modalRef.current!.style.display = 'block';
  };

  const closeModal = () => {
    modalRef.current!.style.display = 'none';
  };

  return (
    <main className='min-h-[80%] flex flex-col p-4 relative'>
      <div
        ref={modalRef}
        id='modal'
        className='hidden p-4 absolute w-[75%] max-h-[60%] bg-slate-200 top-[30%] left-[50%] z-500 translate-x-[-50%] translate-y-[-50%] z-20 md:w-[50%] lg:w-[35%]'
      >
        <div className='flex justify-between items-center font-bold'>
          <span>Create a Product</span>
          <span
            onClick={closeModal}
            className='font-bold border-solid border-[#f2f2f2] border-2 px-2 transition-all cursor-pointer hover:border-[#333]'
          >
            X
          </span>
        </div>
        <form className='flex flex-col justify-center mt-4'>
          <label>Name:</label>
          <input
            className='outline-none m-1'
            type='text'
          />
          <label>Price:</label>
          <input
            className='outline-none m-1'
            type='number'
          />
          <label>Quantity:</label>
          <input
            className='outline-none m-1'
            type='number'
          />
          <label>Image &#40;optional&#41;:</label>
          <input
            className='outline-none m-1'
            type='text'
          />
          <input
            type='submit'
            value='create'
            className='bg-slate-500 text-[#f2f2f2] font-bold mt-4 self-center py-4 px-8 rounded-2xl transition-all cursor-pointer hover:bg-slate-700'
          />
        </form>
      </div>
      <p>Welcome to John's Shop, here you can sell any products!</p>
      <div
        onClick={openModal}
        className='p-4 rounded-2xl bg-slate-600 m-4 text-center min-w-[15em] flex self-center transition-all cursor-pointer text-[#f2f2f2] relative z-10 hover:bg-slate-400'
      >
        <span>Want to add a product? Click here</span>
      </div>
      <ProductList />
    </main>
  );
};

export default Main;
