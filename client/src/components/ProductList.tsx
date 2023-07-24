import Product from './Product';
import { api } from '../api/api';
import { useQuery } from 'react-query';

const ProductList = () => {
  const { data, isLoading, isError } = useQuery('products', api.getProducts);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something wrong happened!</p>;

  return (
    <div className='grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6'>
      {data?.length === 0 && <p>No products yet.</p>}
      {data?.map((product) => (
        <Product
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
