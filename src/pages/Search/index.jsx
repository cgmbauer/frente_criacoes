import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';
import Select from '../../components/Select';
import Input from '../../components/Input';
import DummyImg from '../../assets/profile-dummy.png';

import InputMasked from '../../components/InputMasked';
import {
  UForm,
  SearchContainer,
  FormContainer,
  FilterBox,
  ReservationInformations,
  ReservationsBox,
} from './styles';

const Search = () => {
  const [valueBudget, setValueBudget] = useState('');
  return (
    <SearchContainer>
      <HeaderInterna />

      <NavBar
        navProps={[
          { text: 'Seu perfil', link: '/admin-profile' },
          { text: 'Buscar', link: '/admin-search' },
          { text: 'Dashboard', link: '/dashboard' },
        ]}
      />
      <UForm>
        <FormContainer>
          <FilterBox>
            <label htmlFor="gender">Genero que atua:</label>
            <Select name="select-gender">
              <option value="action">Acão</option>
              <option value="adventure">Aventura</option>
              <option value="comedy">Comédia</option>
              <option value="science-fiction">Ficção Cientifica</option>
              <option value="horror">Terror</option>
            </Select>
          </FilterBox>
          <div className="container-casting">
            <label htmlFor="casting">Casting</label>
            <Input type="text" name="casting" />
          </div>
          <div className="container-budget">
            <label htmlFor="budget">Orçamento</label>
            <InputMasked
              type="text"
              onChange={setValueBudget}
              value={valueBudget}
              mask={[' 999.999.999,99']}
              name="budget"
            />
          </div>
          <div className="container-date">
            <label htmlFor="dtBegin">Disponibilidade</label>
            <Input type="date" name="dtdisponibilidade" />
          </div>
        </FormContainer>
        <section className="container-button-search">
          <button className="buttonSearch" type="submit">
            Pesquisar
          </button>
        </section>
      </UForm>
      <h1>Profissionais encontrados</h1>
      <ReservationsBox>
        <img className="profile" src={DummyImg} alt="dummy profile logo" />

        <ReservationInformations>
          <section>
            <h3>Anônimo Jones</h3>
            <p>R$ 5.000,00</p>
          </section>
          <section>
            <button className="bt-offers" type="button">
              CONTRATAR
            </button>
          </section>
        </ReservationInformations>
      </ReservationsBox>
    </SearchContainer>
  );
};

export default Search;
