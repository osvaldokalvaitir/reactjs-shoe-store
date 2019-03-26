import React, { Component } from 'react';
import { withFormik } from 'formik';
import { compose, lifecycle } from 'recompose';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import api from '../../services/api';

import './styles.css';

class Product extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    values: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.number,
    }).isRequired,
    errors: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.number,
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  deleteProduct = async () => {
    const { id } = this.props.match.params;
    const { push } = this.props.history;

    try {
      await api.delete(`/products/${id}`);
      push('/');
    } catch (err) {
      alert(`Não foi possível excluir o produto. Erro: ${err}`);
    }
  };

  render() {
    const { handleSubmit, errors, handleChange, values } = this.props;
    const { id } = this.props.match.params;

    return (
      <div className="product-info">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Título"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {!!errors.title && <span>{errors.title}</span>}
          </div>
          <div>
            <input
              placeholder="Descrição"
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            {!!errors.description && <span>{errors.description}</span>}
          </div>
          <div>
            <input
              placeholder="Cor"
              type="text"
              name="color"
              value={values.color}
              onChange={handleChange}
            />
            {!!errors.color && <span>{errors.color}</span>}
          </div>
          <div>
            <input
              placeholder="Tamanho"
              type="number"
              name="size"
              value={values.size}
              onChange={handleChange}
            />
            {!!errors.size && <span>{errors.size}</span>}
          </div>

          <div className="actions">
            <button type="submit">Salvar dados</button>
            {id ? (
              <button type="button" onClick={this.deleteProduct}>
                Excluir produto
              </button>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default compose(
  lifecycle({
    async componentDidMount() {
      const { id } = this.props.match.params;

      if (id) {
        const product = await api.get(`/products/${id}`);

        this.setState({ ...product.data });
      }
    },
  }),

  withFormik({
    enableReinitialize: true,

    mapPropsToValues: ({
      title, description, color, size,
    }) => ({
      title: title || '',
      description: description || '',
      color: color || '',
      size: (size && size.valueOf()) || 0,
    }),

    validateOnChange: false,
    validateOnBlur: false,

    validationSchema: Yup.object().shape({
      title: Yup.string().required('Campo obrigatório'),
      description: Yup.string().required('Campo obrigatório'),
      color: Yup.string().required('Campo obrigatório'),
      size: Yup.number().required('Campo obrigatório'),
    }),

    handleSubmit: async (values, { props }) => {
      const { id } = props.match.params;

      try {
        await api.postOrPut('products', id, values);
        props.history.push('/');
      } catch (err) {
        alert(`Não foi possível salvar os dados. Erro: ${err}`);
      }
    },
  }),
)(Product);
