import React, { Component } from 'react';
import styles from './form-register.module.css';
import { TextField, Button } from '@material-ui/core/';

export default class FormRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: {
        name: '',
        email: '',
        CPF_CNPJ: '',
        date: '',
        phone: '',
      },
      erro: null,
      redirect: false,
      classForms: 'invisible',
    };
  }

  showError() {
    const { erro } = this.state;

    if (erro) {
      return (
        <div className="alert alert-danger" role="alert">
          Erro de conexão com o servidor
        </div>
      );
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/usuarios" />;
    } else {
      return (
        <main className={styles.main}>
          <section className={styles.sectionLogo}>
            <img src="../../img/logo-2.png" />
          </section>
          <div className={styles.container}>
            <section className={styles.sectionForm}>
              <h3 className={this.classForms}>Dados Pessoais / Empresariais</h3>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  typeof="text"
                  className={styles.inputForms}
                  id="inputName"
                  name="inputName"
                  label="Nome Completo / Razão Social"
                  required
                  onChange={this.handleInputChange}
                />
                <br />
                <br />
                <TextField
                  className={styles.inputForms}
                  name="inputEmail"
                  label="E-mail"
                  minLength="3"
                  maxLength="255"
                  required
                  onChange={this.handleInputChange}
                />
                <br />
                <br />
                <TextField
                  className={styles.inputForms}
                  name="inputCPF_CNPJ"
                  label="CPF / CNPJ"
                  minLength="11"
                  maxLength="14"
                  required
                  onChange={this.handleInputChange}
                />
                <br />
                <br />
                <TextField
                  className={styles.inputForms}
                  name="inputDate"
                  label="Data de Nascimento / Abertura"
                  minLength="10"
                  maxLength="10"
                  required
                  onChange={this.handleInputChange}
                />
                <br />
                <br />
                <TextField
                  className={styles.inputForms}
                  name="inputPhone"
                  label="Telefone Celular"
                  minLength="10"
                  maxLength="11"
                  required
                  onChange={this.handleInputChange}
                />
                <br />
                <br />
                <TextField
                  className={styles.inputForms}
                  name="CEP"
                  label="CEP"
                  maxLength="8"
                  required
                  onChange={this.handleInputChange}
                />

                <br />
                <br />
                <TextField
                  className={styles.inputForms}
                  name="inputEndereco"
                  label="Endereço"
                  minLength="3"
                  maxLength="255"
                  required
                  onChange={this.handleInputChange}
                />

                <br />
                <br />
                <TextField
                  className={styles.inputForms}
                  name="inputBairro"
                  label="Bairro"
                  minLength="3"
                  maxLength="100"
                  required
                  onChange={this.handleInputChange}
                />

                <br />
                <br />
                <TextField
                  className={styles.inputForms}
                  name="inputCidade"
                  label="Cidade"
                  minLength="2"
                  maxLength="100"
                  required
                  onChange={this.handleInputChange}
                />

                <div className={styles.containerFooter}>
                  <Button
                    //type="submit"
                    className={styles.buttonCustom}
                    variant="contained"
                    href="home/register"
                    onClick={this.proximoForm}
                  >
                    Prosseguir
                  </Button>
                </div>
              </form>
            </section>
            <section className={styles.sectionImg}>
              <img src="../../img/detail-register-cpf.png" />
            </section>
          </div>
        </main>
      );
    }
  }

  proximoForm() {
    event.preventDefault();

    alert(this.classForms, 'Leonardo Baitola!');
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(prevState => ({
      clients: { ...prevState.clients, [name]: value },
    }));
    console.log(value);
  };

  handleSubmit = event => {
    fetch('http://localhost:3003/clients', {
      method: 'post',
      body: JSON.stringify(this.state.clients),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => {
        if (data.ok) {
          this.setState({ redirect: true });
        } else {
          data.json().then(data => {
            if (data.error) {
              this.setState({ erro: data.error });
            }
          });
        }
      })
      .catch(erro => this.setState({ erro: erro }));

    event.preventDefault();
  };
}
