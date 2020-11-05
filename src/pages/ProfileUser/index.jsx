import React, { useCallback, useState } from 'react';
import Input from '../../components/Input';
import NavBar from '../../components/NavBar';
import Logo from '../../assets/remoto_logo.svg';
import DummyImg from '../../assets/profile-dummy.png';
import { Form, LoginContainer, LoginTitle, LoginTitleText } from './styles';

const ProfileUser = () => {
  const [name, setName] = useState('');

  const handleSelect = useCallback(
    event => {
      const evento = event.target.value;
      setName(evento);
    },
    [setName],
  );

  return (
    <LoginContainer>
      <img className="logo" src={Logo} alt=" " />
      <NavBar />
      <LoginTitle>
        <img className="profile" src={DummyImg} alt="dummy profile logo" />
        <LoginTitleText>Perfil De Usuário</LoginTitleText>
      </LoginTitle>

      <Form>
        <label htmlFor="name">Nome Completo</label>
        <Input name="name" type="name" id="name" />

        <label htmlFor="email">E-mail</label>
        <Input name="email" type="email" id="email" />

        <label htmlFor="genero">Gênero</label>
        <Input name="genero" type="textarea" id="genero" />

        <label htmlFor="genero-atua">Gênero que atua</label>
        <select id="genero-atua" onClick={handleSelect}>
          <option value="">Selecione um gênero</option>
          <option value="terror">Terror</option>
          <option value="comedia">Comédia</option>
          <option value="acão">Acão</option>
          <option value="aventura">Aventura</option>
        </select>

        <input type="hidden" name={name} />

        <label htmlFor="Orçamento">Orçamento</label>
        <Input name="Orçamento" type="number" id="orcamento" placeholder="R$" />

        <label htmlFor="password"> </label>
        <Input
          name="password"
          type="name"
          id="vlrmin"
          className="vlrmin"
          placeholder="Valor mínimo"
        />

        <label htmlFor="password"> </label>
        <Input
          name="password"
          type="name"
          id="vlrmax"
          className="vlrmax"
          placeholder="Valor máximo"
        />

        <label htmlFor="Orçamento">Disponibilidade</label>
        <Input
          name="Orçamento"
          type="date"
          id="password"
          placeholder="Data Inicial"
        />

        <label htmlFor="password">Até</label>
        <Input
          name="password"
          type="date"
          id="password"
          placeholder="Data final"
        />

        <button type="submit">Continuar</button>
      </Form>
    </LoginContainer>
  );
};

export default ProfileUser;
