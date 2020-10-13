import React, { Component } from 'react';
import styles from './register.module.css';
import FormRegister from '../../../components/home/form-registrer';

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

        <FormRegister />
        <Footer />
      </div>
    );
  }
}
