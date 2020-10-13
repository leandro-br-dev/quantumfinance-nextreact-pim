import React, { Component } from 'react';
import styles from './sobre.module.css';
import Header from '../../../components/home/header';
import Footer from '../../../components/home/footer'

export default class sobre extends React.Component {
    render() {
      return (
        <div>
        <Header />
        
        <main>
        <section className={styles.sectionLogo}>
            <img src="../../img/logo-2.png" />
        </section>
        <div className={styles.maincontent}>
            <div>
                <h2>O melhor investimento com estratégias personalizadas de investimento para todos os
                cenários do preço de criptomoedas, oferecendo flexibilidade, diversificação e proteção para sua
                carteira de investimentos.

                Atendimento direcionado, sendo que a nossa principal preocupação é garantir o melhor
                atendimento do mercado. Analisamos o seu perfil antes de realizar o investimento, garantindo
                que você contrate as melhores opções.

                Não cobramos nenhuma taxa de corretagem em criptomoedas nos primeiros seis meses do
                usuário cadastrado como cliente ativo.</h2>
            </div>
            <div>
                <img src="../../img/sobre.jpg" />
            </div>             
        </div>
        </main>


        <Footer />
      </div>
  );
      
      }
    }



