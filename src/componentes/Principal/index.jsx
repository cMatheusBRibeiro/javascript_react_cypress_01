import React from "react";
import estilos from "./Principal.module.css";
import { ReactComponent as Ilustracao } from "./ilustracao.svg";
import Saldo from "./Saldo";

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export default function Principal({ saldo }) {
  return (
    <section className={estilos.container}>
      <div className={estilos.detalhe__superior} />
      <h1 data-testid="titulo-principal" className={estilos.titulo}>
        Bem vindo de volta!
      </h1>
      <p data-testid="data-atual" className={estilos.data}>{`${
        diasDaSemana[hoje.getDay()]
      }, ${hoje.toLocaleDateString("pt-BR")}`}</p>
      <div className={estilos.wrapper}>
        <Ilustracao className={estilos.ilustracao} width="250" height="160" />
        <Saldo saldo={saldo} />
      </div>
      <div className={estilos.detalhe__inferior} />
    </section>
  );
}
