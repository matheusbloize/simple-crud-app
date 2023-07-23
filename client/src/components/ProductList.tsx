import Product from './Product';
import { api } from '../api/api';
import { useQuery } from 'react-query';
import Modal from './Modal';
import { useRef } from 'react';

const ProductList = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useQuery('products', api.getProducts);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something wrong happened!</p>;

  const openModal = () => {
    modalRef.current!.style.display = 'block';
  };

  const closeModal = () => {
    modalRef.current!.style.display = 'none';
  };

  return (
    <div className='grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6'>
      {/* <Modal
        modalRef={modalRef}
        openModal={openModal}
        closeModal={closeModal}
        button='update'
        title='Update a Product'
      /> */}
      {data?.length === 0 && <p>No products yet.</p>}
      {data?.map((product) => (
        <Product
          key={product._id}
          product={product}
          // openModal={openModal}
        />
      ))}
    </div>
  );
};

export default ProductList;
