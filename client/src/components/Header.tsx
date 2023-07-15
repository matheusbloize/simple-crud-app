import shoppingCart from '../assets/shopping-cart.png';

const Header = () => {
  return (
    <header className='bg-gray-100 h-[6em] w-full'>
      <div className='h-full justify-around flex items-center'>
        <div className='flex items-center flex-col'>
          <img
            src={shoppingCart}
            alt='Shopping Cart'
            width={50}
            height={50}
          />
          <h1 className='hidden md:flex'>John's Shop</h1>
        </div>
        <div>
          <input
            type='text'
            placeholder='Search for an item'
            className='rounded-full px-4 py-2 w-full box-border outline-none'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
