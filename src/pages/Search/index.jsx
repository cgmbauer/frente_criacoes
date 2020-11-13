import React, { useCallback, useState } from 'react';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';
import Select from '../../components/Select';
import Input from '../../components/Input';
import DummyImg from '../../assets/profile-dummy.png';

import {
  UForm,
  SearchContainer,
  FormContainer,
  FilterBox,
  ReservationInformations,
  ReservationsBox,
  Button,
} from './styles';

const Search = () => {
  const { user } = useAuth();
  const [castList, setCastList] = useState('');

  const [date, setDate] = useState('');

  const [activated, setActivated] = useState(false);

  const [notFound, setNotFound] = useState(false);

  const handleSubmit = useCallback(async formData => {
    const { genre, casting, budget, dtdisponibilidade } = formData;

    const responseGetCast = await api.get(`producer/getCast`, {
      params: {
        quantity: casting,
        budget,
        genre,
        date: dtdisponibilidade,
      },
    });

    if (responseGetCast.data.length > 0) {
      setDate(dtdisponibilidade);

      setCastList(responseGetCast.data);

      setNotFound(false);
    } else {
      setNotFound(true);
    }
  }, []);

  const handleActivated = useCallback(
    async castId => {
      setActivated(true);

      await api.post(`reserve/save/${castId}`, {
        reserveDate: date,
        producer: {
          id: user.id,
        },
      });
    },
    [date, user.id],
  );

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
      <UForm onSubmit={handleSubmit}>
        <FormContainer>
          <FilterBox>
            <label htmlFor="genre">Genero que atua:</label>
            <Select name="genre" id="genre" required>
              <option value="acao">Acão</option>
              <option value="aventura">Aventura</option>
              <option value="comedia">Comédia</option>
              <option value="ficcao cientifica">Ficção Cientifica</option>
              <option value="torror">Terror</option>
            </Select>
          </FilterBox>
          <div className="container-casting">
            <label htmlFor="casting">Casting</label>
            <Input type="text" name="casting" id="casting" required />
          </div>
          <div className="container-budget">
            <label htmlFor="budget">Orçamento</label>
            <Input type="text" name="budget" id="budget" required />
          </div>
          <div className="container-date">
            <label htmlFor="dtBegin">Disponibilidade</label>
            <Input
              type="date"
              name="dtdisponibilidade"
              id="dtBegin"
              placeholder="dd/mm/yyyy"
              required
            />
          </div>
        </FormContainer>
        <section className="container-button-search">
          <button className="buttonSearch" type="submit">
            Pesquisar
          </button>
        </section>
      </UForm>

      {castList.length > 0 && !notFound && <h1>Profissionais encontrados</h1>}

      {castList.length > 0 &&
        !notFound &&
        castList.map(cast => (
          <ReservationsBox key={cast.id}>
            <img className="profile" src={DummyImg} alt="dummy profile logo" />

            <ReservationInformations>
              <section>
                <h3>{cast.name}</h3>
                <p>
                  {`$ `}
                  {cast.price}
                </p>
              </section>
              <section>
                {cast.status ? (
                  <Button
                    className="bt-offers"
                    type="button"
                    onClick={() => handleActivated(cast.id)}
                    activated={activated}
                  >
                    CONTRATAR
                  </Button>
                ) : (
                  <p className="unavailable">Indisponível</p>
                )}
              </section>
            </ReservationInformations>
          </ReservationsBox>
        ))}
      {notFound && (
        <h1>Nenhum profissional encontrado, por favor tente novamente.</h1>
      )}
    </SearchContainer>
  );
};

export default Search;
