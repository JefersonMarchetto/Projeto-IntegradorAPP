import React from 'react';

const PessoaApoio = ({ nome, cpf, endereco, dataNascimento, funcao, salario }) => {
    return (
        <div className="pessoa">
            <h2>{nome}</h2>
            <p>CPF: {cpf}</p>
            <p>Endereço: {endereco}</p>
            <p>Data de Nascimento: {dataNascimento}</p>
            <p>Função: {funcao}</p>
            <p>Salário: {salario}</p>
        </div>
    );
};

export default PessoaApoio;
