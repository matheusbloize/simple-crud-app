import { Product as ProductInterface } from '../models/ProductModel';

interface Props {
  product: ProductInterface;
}

const Product = ({ product }: Props) => {
  return (
    <>
    <h3>{product.name}</h3>
    <h4>{product.price}</h4>
    <h4>{product.quantity}</h4>
    </>
    )
};

export default Product;
