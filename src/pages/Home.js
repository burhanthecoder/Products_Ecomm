import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.log(error));
    }, []);

    const addToCart = (product) => {
        
        console.log(`Added ${product.title} to cart`);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center my-4">Product List</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.thumbnail} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                {product.discountPercentage > 0 && (
                                    <Card.Text>
                                        Discounted Price: ${product.price - (product.price * product.discountPercentage / 100)}
                                    </Card.Text>
                                )}
                                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
