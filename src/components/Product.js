import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;


  return (
    <Card className="product-cart">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.imagehome}
          className="card-img-top imgproduct"
          alt={product.name}
          height={200}
          style={{ objectFit: 'cover', borderRadius: 20 }}
        />
      </Link>
      <Card.Body>
        <Link style={{ color: 'black', textDecoration: 'none' }} to={`/product/${product.id}`}>
          <Card.Title style={{ fontSize: '18px', fontWeight: 'bold' }}>{product.name}</Card.Title>
        </Link>
        {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
        {/* <Card.Text style={{ color: 'black' }}>
          <span style={{ color: 'Highlight', fontWeight: 'bold' }}>0908467682 (Sđt/Zalo)</span>
        </Card.Text> */}
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Link style={{ backgroundColor: 'none', marginTop: 50 }} to={`/product/${product.id}`}>
            {/* <Card.Title>{product.name}</Card.Title> */}
            <Button
              style={{
                borderColor: 'black',
                color: 'black',
                backgroundColor: 'transparent',
                borderRadius: 10,
                marginTop: 20,
                fontSize: 17,
              }}
            >
              Xem chi tiết
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
