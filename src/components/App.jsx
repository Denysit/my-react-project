// src/Product/App.jsx

// import { Product } from './Product';

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         price={10.99}
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

// import { BookList } from './BookList';
// import { favouriteBooks } from './favouriteBooks';

// const alertStyles = {
//  margin: 8,
// padding: "12px 16px",
// borderRadius: 4,
// backgroundColor: "gray",
// color: "red",
// };

// export default function App() {
//   return (
//     <>
//       <h1 style={alertStyles} >Books of the week</h1>
//       <BookList  books={favouriteBooks} />
//     </>
//   );

// }


// src/components/App.jsx

import { Alert } from "./Alert";


export default function App() {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
}



