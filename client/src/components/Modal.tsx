import { MouseEvent, LegacyRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api/api';
import { toast } from 'react-toastify';

interface Props {
  modalRef: LegacyRef<HTMLDivElement> | undefined;
  openModal: (type: string) => void;
  closeModal: () => void;
  title: string;
  button: string;
  productName: string | undefined;
  productPrice: number | undefined;
  productQuantity: number | undefined;
  productImage: string | undefined;
  setProductName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setProductPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setProductQuantity: React.Dispatch<React.SetStateAction<number | undefined>>;
  setProductImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  id?: string;
}

const Modal = ({
  modalRef,
  closeModal,
  title,
  button,
  productName,
  productPrice,
  productQuantity,
  productImage,
  setProductName,
  setProductPrice,
  setProductQuantity,
  setProductImage,
  id,
}: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    () =>
      button === 'create'
        ? api.createProduct({
            name: productName || '',
            price: productPrice || 0,
            quantity: productQuantity || 0,
            image: productImage,
          })
        : api.updateProduct(id!, {
            name: productName || '',
            price: productPrice || 0,
            quantity: productQuantity || 0,
            image: productImage,
          }),
    {
      onSuccess: () => {
        void queryClient.invalidateQueries('products');
        button === 'create' ? toast.success('Product created!') : toast.info('Product updated!');
        closeModal();
      },
    }
  );

  const productValidate = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (productName!.length >= 3 && productPrice! > 0 && productQuantity! > 0) {
      mutate();
    }
  };

  return (
    <div
      ref={modalRef}
      id='modal'
      className='hidden p-4 absolute w-[75%] max-h-[60%] bg-slate-200 top-[30%] left-[50%] z-500 translate-x-[-50%] translate-y-[-50%] z-20 md:w-[50%] lg:w-[35%]'
    >
      <div className='flex justify-between items-center font-bold'>
        <span>{title}</span>
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
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <label>Price:</label>
        <input
          className='outline-none m-1'
          type='number'
          onChange={(e) => setProductPrice(Number(e.target.value))}
          value={productPrice}
        />
        <label>Quantity:</label>
        <input
          className='outline-none m-1'
          type='number'
          onChange={(e) => setProductQuantity(Number(e.target.value))}
          value={productQuantity}
        />
        <label>Image &#40;optional&#41;:</label>
        <input
          className='outline-none m-1'
          type='text'
          onChange={(e) => setProductImage(e.target.value)}
          value={productImage}
        />
        <input
          type='submit'
          value={button}
          onClick={productValidate}
          className='bg-slate-500 text-[#f2f2f2] font-bold mt-4 self-center py-4 px-8 rounded-2xl transition-all cursor-pointer hover:bg-slate-700'
        />
      </form>
    </div>
  );
};

export default Modal;
