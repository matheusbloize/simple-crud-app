import Product from './Product';
import { api } from '../api/api';
import { useQuery } from 'react-query';

interface Props {
  filteredSearch: string[];
}

const ProductList = ({ filteredSearch }: Props) => {
  const { data, isLoading, isError } = useQuery('products', api.getProducts);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something wrong happened!</p>;

  return (
    <div className='flex items-center justify-center flex-col px-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {data?.length === 0 && <p>No products yet.</p>}
      {data?.map((product) => (
        <>
          {filteredSearch === null ? (
            <Product
              key={product._id}
              product={product}
            />
          ) : (
            filteredSearch?.includes(product.name) && (
              <Product
                key={product._id}
                product={product}
              />
            )
          )}
        </>
      ))}
    </div>
  );
};

export default ProductList;
