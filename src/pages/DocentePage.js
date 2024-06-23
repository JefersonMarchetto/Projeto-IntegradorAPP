import React from 'react';
import PessoaDocente from '../components/PessoaDocente';

const DocentePage = () => {
    return (
        <div className="container">
            <header>
                <h1>Gerenciamento Docente</h1>
            </header>
            <main>
                <PessoaDocente nome="Maria Oliveira" cpf="321.654.987-00" endereco="Rua D, 101" dataNascimento="04/04/1990" titulacao="Mestre" salario="R$ 8.000" />
                <PessoaDocente nome="José Santos" cpf="111.222.333-44" endereco="Rua E, 202" dataNascimento="05/05/1975" titulacao="Doutor" salario="R$ 12.000" />
                {/* Adicione mais instâncias conforme necessário */}
            </main>
        </div>
    );
};

export default DocentePage;
