import styles from "../../styles/Product/Product.module.css";

// image imports
import samsungphone from "../../assets/images/Samsung-Galaxy-S10-Plus.jpg";
import couch from "../../assets/images/couch.jpg";
import fridge from "../../assets/images/hifridge.jpg";
import television from "../../assets/images/tv.png";
import soundsystem from "../../assets/images/sound.jpg";
import washingmachine from "../../assets/images/washingmachine.jpg";
import ProductItem from "./ProductItem";

const products = [
  {
    id: "p1",
    name: "Samsung Galaxy S10",
    image: samsungphone,
    company: "Samsung Ghana",
    price: 1700,
  },
  {
    id: "p2",
    name: "Mandala Counch",
    image: couch,
    company: "Kpogas Furniture",
    price: 500,
  },
  {
    id: "p3",
    name: "Hisense Fridge",
    image: fridge,
    company: "Hisense Ghana",
    price: 700,
  },
  {
    id: "p4",
    name: "Hisense 32 inch Television",
    image: television,
    company: "Hisense Ghana",
    price: 450,
  },
  {
    id: "p5",
    name: "Trev Sound System",
    image: soundsystem,
    company: "Electroland Ghana",
    price: 1000,
  },
  {
    id: "p6",
    name: "Smart Washing Machine",
    image: washingmachine,
    company: "Smart Electronics",
    price: 900,
  },
];

const AvailableProduct = (props) => {
  const dummyProducts = products.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      company={product.company}
      price={product.price}
      image={product.image}
    />
  ));
  return <div className={styles.product}>{dummyProducts}</div>;
};

export default AvailableProduct;
