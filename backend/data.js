
import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
       
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.jfif',
        price: 120,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        countInStock: 10
      },
      {
       
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p2.jfif',
        price: 100,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
          countInStock: 10
      },
      {
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/p3.jfif',
        price: 220,
        brand: 'Lacoste',
        rating: 4,
        numReviews: 17,
        description: 'high quality product',
          countInStock: 10
      },
      {
     
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/p4.jfif',
        price: 78,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
          countInStock: 0
      },
      {
       
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/p5.jfif',
        price: 65,
        brand: 'Puma',
        rating: 3,
        numReviews: 10,
        description: 'high quality product',
          countInStock: 10
      },
      {
       
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/p5.jfif',
        price: 139,
        brand: 'Adidas',
        rating: 2.5,
        numReviews: 15,
        description: 'high quality product',
          countInStock: 10
      },
    ],
  };
  export default data;