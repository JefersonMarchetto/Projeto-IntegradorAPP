import React from 'react';

const Pessoa = ({ nome, cpf, endereco, dataNascimento }) => {
    return (
        <div className="pessoa">
            <h2>{nome}</h2>
            <p>CPF: {cpf}</p>
            <p>Endereço: {endereco}</p>
            <p>Data de Nascimento: {dataNascimento}</p>
        </div>
    );
};

export default Pessoa;
