import Product from './Product';
import { api } from '../api/api';
import { useQuery } from 'react-query';

const ProductList = () => {
  const { data, isLoading, isError } = useQuery('products', api.getProducts);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something wrong happened!</p>;

  console.log(data);

  return (
    <>
      <p>productList</p>
      {data?.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};

export default ProductList;
