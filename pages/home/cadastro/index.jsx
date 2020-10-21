import React, { Component } from 'react';
import styles from './cadastro.module.css';

import FormCadastro from '../../../components/home/form-cadastro-parte1';

import Head from 'next/head';
import Header from '../../../components/home/header';
import Footer from '../../../components/home/footer';

export default class Register extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Quantum Finance - Seu banco digital de criptomoedas</title>
          <link rel="icon" href="/../../../favicon.ico" />
        </Head>

        <Header />

        <FormCadastro />
        <Footer />
      </div>
    );
  }
}
