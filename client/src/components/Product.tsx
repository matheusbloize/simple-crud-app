import { Product as ProductInterface } from '../models/ProductModel';
import defaultImage from '../assets/default.png';
import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api/api';
import { MouseEvent, useRef, useState } from 'react';
import Modal from './Modal';

interface Props {
  product: ProductInterface;
}

const Product = ({ product }: Props) => {
  const divButtonsRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [updatedProductName, setUpdatedProductName] = useState<string | undefined>('');
  const [updatedProductPrice, setUpdatedProductPrice] = useState<number | undefined>(0);
  const [updatedProductQuantity, setUpdatedProductQuantity] = useState<number | undefined>(0);
  const [updatedProductImage, setUpdatedProductImage] = useState<string | undefined>('');

  const openModal = () => {
    modalRef.current!.style.display = 'block';
    setUpdatedProductName(product.name);
    setUpdatedProductPrice(product.price);
    setUpdatedProductQuantity(product.quantity);
    setUpdatedProductImage(product.image);
  };
  
  const closeModal = () => {
    modalRef.current!.style.display = 'none';
    setUpdatedProductName('');
    setUpdatedProductPrice(0);
    setUpdatedProductQuantity(0);
    setUpdatedProductImage('');
  };

  const queryClient = useQueryClient();

  const checkAction = async (e: MouseEvent) => {
    if ((e.target as HTMLButtonElement).getAttribute('button-attribute') === 'delete') {
      void (await api.deleteProduct(product._id!)),
        {
          onSuccess: () => {
            void queryClient.invalidateQueries('products');
          },
        };
    } else {
      openModal()
    }
    void queryClient.invalidateQueries('products');
  };

  useMutation(checkAction);

  return (
    <>
      <Modal
        modalRef={modalRef}
        openModal={openModal}
        closeModal={closeModal}
        button='update'
        title='Update a Product'
        productName={updatedProductName}
        setProductName={setUpdatedProductName}
        productPrice={updatedProductPrice}
        setProductPrice={setUpdatedProductPrice}
        productQuantity={updatedProductQuantity}
        setProductQuantity={setUpdatedProductQuantity}
        productImage={updatedProductImage}
        setProductImage={setUpdatedProductImage}
        id={product._id}
      />
      <div className='bg-[#f2f2f2] border-solid border-[#333] border-[1px] rounded-lg  max-w-full min-h-[15em] p-4 flex flex-col items-center justify-center m-4 cursor-pointer'>
        {product.image ? (
          <img
            className='w-[50vw] h-[25vh] md:w-[25vw] 2xl:w-[12vw]'
            src={product.image}
            alt={product.name}
          />
        ) : (
          <img
            className='w-[50vw] h-[25vh] md:w-[25vw] 2xl:w-[12vw]'
            src={defaultImage}
            alt={product.name}
          />
        )}
        <h3 className='my-2'>{product.name}</h3>
        <div className='text-center'>
          <h4>Price: ${product.price}</h4>
          <h4>Quantity: {product.quantity}</h4>
        </div>
        <div
          ref={divButtonsRef}
          className='flex gap-4'
        >
          <button
            onClick={(e) => checkAction(e)}
            button-attribute='delete'
            className='bg-red-500 text-[#f2f2f2] font-bold mt-4 self-center py-4 px-8 rounded-2xl transition-all cursor-pointer hover:bg-red-700'
          >
            remove
          </button>
          <button
            onClick={(e) => checkAction(e)}
            button-attribute='update'
            button-used='false'
            className='bg-slate-500 text-[#f2f2f2] font-bold mt-4 self-center py-4 px-8 rounded-2xl transition-all cursor-pointer hover:bg-slate-700'
          >
            update
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
