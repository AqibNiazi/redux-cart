import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DummyProducts = [
  {
    id: "p1",
    price: 6,
    title: "First Product",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 5,
    title: "Second Product",
    description: "This is a second product - amazing!",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
