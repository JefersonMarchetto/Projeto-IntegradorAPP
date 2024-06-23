import React from 'react';
import PessoaApoio from '../components/PessoaApoio';

const ApoioPage = () => {
    return (
        <div className="container">
            <header>
                <h1>Gerenciamento de Apoio</h1>
            </header>
            <main>
                <PessoaApoio nome="Pedro Silva" cpf="555.666.777-88" endereco="Rua F, 303" dataNascimento="06/06/1988" funcao="Bibliotecário" salario="R$ 3.000" />
                <PessoaApoio nome="Luiza Costa" cpf="999.888.777-66" endereco="Rua G, 404" dataNascimento="07/07/1992" funcao="Monitor" salario="R$ 2.500" />
            </main>
        </div>
    );
};

export default ApoioPage;
