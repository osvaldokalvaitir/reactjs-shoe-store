import React, { Component } from "react";
import api from "../../services/api";
import { withRouter } from "react-router-dom";

import "./styles.css";

class Product extends Component {
    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        if (id) {
          const response = await api.get(`/products/${id}`);
          this.setState({ product: response.data });        
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState(prevState => ({
            product: {
                ...prevState.product,
                [name]: value
            }
        }));
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { _id, title, description, color, size } = this.state.product;

        console.log(this.state.product);

        try {
            if (!_id) {
                await api.post(`/products`,
                {
                    title,
                    description,
                    color,
                    size 
                });
            } else {
                await api.put(`/products/${_id}`,
                {
                    title,
                    description,
                    color,
                    size 
                });
            }
            this.props.history.push("/");
        }
        catch(err) {
            alert(`Não foi possível salvar os dados. Erro: ${err}`);
        }
    }

    deleteProduct = async () => {
        const { _id } = this.state.product;

        try {
            await api.delete(`/products/${_id}`);
            this.props.history.push("/");            
        }
        catch(err) {
            alert(`Não foi possível excluir o produto. Erro: ${err}`);
        }   
    }

    render() {
        const { _id, title, description, color, size } = this.state.product || '';

        return (
            <div className="product-info">
                <form>
                    <label>
                        <p>Título</p>
                        <input type="text" name="title" value={title} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Descrição</p>
                        <input type="text" name="description" value={description} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Cor</p>
                        <input type="text" name="color" value={color} onChange={this.handleChange} />
                    </label>                        
                    <label>
                        <p>Tamanho</p>
                        <input type="text" name="size" value={size} onChange={this.handleChange} />
                    </label>                    
                </form>
                <div className="actions">
                    <button type="submit" onClick={this.handleSubmit}>
                        Salvar dados
                    </button>
                    { (_id) 
                        ? <button onClick={this.deleteProduct}>
                            Excluir produto
                          </button>
                        : null
                    }                         
                </div>
            </div>
        );
    }
}

export default withRouter(Product);