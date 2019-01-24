import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

class Product extends Component {
  state = {
    product: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      const response = await api.get(`/products/${id}`);
      this.setState({ product: response.data });
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      _id, title, description, color, size,
    } = this.state.product;

    try {
      if (!_id) {
        await api.post('/products', {
          title,
          description,
          color,
          size,
        });
      } else {
        await api.put(`/products/${_id}`, {
          title,
          description,
          color,
          size,
        });
      }
      this.props.history.push('/');
    } catch (err) {
      alert(`Não foi possível salvar os dados. Erro: ${err}`);
    }
  };

  deleteProduct = async () => {
    const { _id } = this.state.product;

    try {
      await api.delete(`/products/${_id}`);
      this.props.history.push('/');
    } catch (err) {
      alert(`Não foi possível excluir o produto. Erro: ${err}`);
    }
  };

  handleInputTitleChange = e => this.setState({ product: { ...this.state.product, title: e.target.value } });

  handleInputDescriptionChange = e => this.setState({ product: { ...this.state.product, description: e.target.value } });

  handleInputColorChange = e => this.setState({ product: { ...this.state.product, color: e.target.value } });

  handleInputSizeChange = e => this.setState({ product: { ...this.state.product, size: e.target.value } });

  render() {
    const {
      _id, title, description, color, size,
    } = this.state.product || '';

    return (
      <div className="product-info">
        <form onSubmit={this.handleSubmit}>
          <div>
            <p>Título</p>
            <input type="text" name="title" value={title} onChange={this.handleInputTitleChange} />
          </div>
          <div>
            <p>Descrição</p>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleInputDescriptionChange}
            />
          </div>
          <div>
            <p>Cor</p>
            <input type="text" name="color" value={color} onChange={this.handleInputColorChange} />
          </div>
          <div>
            <p>Tamanho</p>
            <input type="text" name="size" value={size} onChange={this.handleInputSizeChange} />
          </div>

          <div className="actions">
            <button type="submit">
              Salvar dados
            </button>
            {_id ? <button type="button" onClick={this.deleteProduct}>Excluir produto</button> : null}
          </div>
        </form>
      </div>
    );
  }
}

export default Product;
