import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

class Product extends Component {
    state = {
        product: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
        
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p><strong>Cor: </strong>{product.color}</p>
                <p><strong>Tamanho: </strong>{product.size}</p>
            </div>
        );
    }
}

export default Product;