import React from 'react';
import Pessoa from '../components/Pessoa';

const Home = () => {
    return (
        <div className="container">
            <header>
                <h1>Gerenciamento de Recursos Humanos</h1>
            </header>
            <main>
                <Pessoa nome="João Silva" cpf="123.456.789-10" endereco="Rua A, 123" dataNascimento="01/01/1990" />
            </main>
        </div>
    );
};

export default Home;
