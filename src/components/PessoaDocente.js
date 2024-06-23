import React from 'react';

const PessoaDocente = ({ nome, cpf, endereco, dataNascimento, titulacao, salario }) => {
    return (
        <div className="pessoa">
            <h2>{nome}</h2>
            <p>CPF: {cpf}</p>
            <p>Endereço: {endereco}</p>
            <p>Data de Nascimento: {dataNascimento}</p>
            <p>Titulação: {titulacao}</p>
            <p>Salário: {salario}</p>
        </div>
    );
};

export default PessoaDocente;
