import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import api from '../../services/api';

import './styles.css';

class Product extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      const response = await api.get(`/products/${id}`);
      // response.data
    }
  };

  // deleteProduct = async () => {
  //   const { _id } = this.state.product;

  //   try {
  //     await api.delete(`/products/${_id}`);
  //     this.props.history.push('/');
  //   } catch (err) {
  //     alert(`Não foi possível excluir o produto. Erro: ${err}`);
  //   }
  // };

  render() {
    console.log(this.props);

    const {
      handleSubmit, errors, values, handleChange,
    } = this.props;

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
              type="text"
              name="size"
              value={values.size}
              onChange={handleChange}
            />
            {!!errors.size && <span>{errors.size}</span>}
          </div>

          <div className="actions">
            <button type="submit">Salvar dados</button>
            {/* {this.props.match.params._id ? (
              <button type="button" onClick={this.deleteProduct}>
                Excluir produto
              </button>
            ) : null} */}
          </div>
        </form>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: (props) => (
    console.log(props)
  //   {
  //   title: '',
  //   description: '',
  //   color: '',
  //   size: '',
  // }
  ),

  validateOnChange: false,
  validateOnBlur: false,

  validationSchema: Yup.object().shape({
    title: Yup.string().required('Campo obrigatório'),
    description: Yup.string().required('Campo obrigatório'),
    color: Yup.string().required('Campo obrigatório'),
    size: Yup.number().required('Campo obrigatório'),
  }),

  handleSubmit: async (values, { props }) => {
    console.log(props);

    // const { _id } = props.match.params;

    // try {
    //   await api.postOrPut('products', _id, values);
    //   this.props.history.push('/');
    // } catch (err) {
    //   alert(`Não foi possível salvar os dados. Erro: ${err}`);
    // }
  },
})(Product);
