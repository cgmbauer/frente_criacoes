import React, { useCallback, useState } from 'react';
import Input from '../../components/Input';
import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';
import Select from '../../components/Select';
import DummyImg from '../../assets/profile-dummy.png';

import { Form, LoginContainer, LoginTitle, LoginTitleText } from './styles';

const ProfileUser = () => {
  return (
    <LoginContainer>
      <HeaderInterna />
      <NavBar
        navProps={[
          { text: 'Seu perfil', link: '/profile' },
          { text: 'Reservas', link: '/reservations' },
          { text: 'Propostas', link: '/offers' },
        ]}
      />
      <LoginTitle>
        <LoginTitleText>Perfil De Usuário</LoginTitleText>
        <img className="profile" src={DummyImg} alt="dummy profile logo" />
      </LoginTitle>

      <Form>
        <label htmlFor="name">Nome Completo</label>
        <Input name="name" type="name" id="name" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <label htmlFor="genero">Gênero</label>
        <Select id="genero">
          <option value=""> </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="N">Prefiro não Responder </option>
        </Select>

        <label htmlFor="genero-atua">Gênero que atua</label>
        <Select id="genero-atua">
          <option value="">Selecione um gênero</option>
          <option value="terror">Terror</option>
          <option value="comedia">Comédia</option>
          <option value="acão">Acão</option>
          <option value="aventura">Aventura</option>
        </Select>

        <div id="orcamento">
          <div className="rs">
            <label htmlFor="Orçamento">Orçamento</label>
            <Input name="Orçamento" type="number" placeholder="R$" />
          </div>
          <div className="vlrmin">
            <label htmlFor="password"> </label>
            <Input
              name="password"
              type="name"
              id="vlrmin"
              placeholder="Valor mínimo"
            />
          </div>
          <div className="vlrmax">
            <label htmlFor="password"> </label>
            <Input
              name="password"
              type="name"
              id="vlrmax"
              className="vlrmax"
              placeholder="Valor máximo"
            />
          </div>
        </div>

        <div className="flexbox">
          <label htmlFor="Orçamento">Disponibilidade</label>
          <div className="date1">
            <Input
              name="Orçamento"
              type="date"
              id="password"
              placeholder="Data Inicial"
            />
            <p>até</p>
            <Input
              name="password"
              type="date"
              id="password"
              placeholder="Data final"
            />
          </div>
        </div>
        <button type="submit">Continuar</button>
      </Form>
    </LoginContainer>
  );
};

export default ProfileUser;
