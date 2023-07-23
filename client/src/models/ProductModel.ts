export interface Product {
  _id?: string,
  name: string,
  price: number,
  quantity: number,
  image?: string,
}

export interface ProductPut {
  _id?: string,
  name?: string,
  price?: number,
  quantity?: number,
  image?: string,
}