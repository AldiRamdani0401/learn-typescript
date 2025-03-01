// === VERSION 1 === //
// export type Category = {
//   id: string;
//   name: string;
// };

// export type Product = {
//   id: string;
//   name: string;
//   price: number;
//   category: Category;
// };

// === VERSION 2 === //
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
};
