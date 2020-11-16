import React, { useCallback, useState, useEffect } from 'react';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';

import DummyImg from '../../assets/profile-dummy.png';

import {
  OffersContainer,
  ReservationBox,
  ReservationInformations,
  AlertModal,
} from './styles';

const Offers = () => {
  const { user } = useAuth();
  const [castList, setCastList] = useState('');

  const [notFound, setNotFound] = useState(false);
  const [alert, setAlert] = useState(false);

  const toggleAlert = useCallback(() => {
    setAlert(!alert);
  }, [alert]);

  const handleDeclineReservation = useCallback(
    async castId => {
      try {
        await api.delete(`/reserve/delete?id=${castId}`);

        const newList = castList.filter(cast => castId !== cast.id);
        toggleAlert();

        setCastList([...newList]);
      } catch (err) {
        throw new Error(err);
      }
    },
    [castList, toggleAlert],
  );

  useEffect(() => {
    async function getReserveList() {
      const response = await api.get(`/reserve/listByActress/${user.id}`);
      if (response.data.length > 0) {
        const reserveData = response.data;

        const artistDataWithCapitalGenre = reserveData.map(artist => ({
          ...artist,
          actress: Object.assign(artist.actress, {
            genre:
              artist.actress.genre.charAt(0).toUpperCase() +
              artist.actress.genre.slice(1),
          }),
          reserveDate: artist.reserveDate.split('-').reverse().join('/'),
        }));

        setCastList(artistDataWithCapitalGenre);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    }
    getReserveList();
  }, [user.id]);

  return (
    <OffersContainer>
      <HeaderInterna />
      <NavBar
        navProps={[
          { text: 'Seu perfil', link: '/user-profile' },
          { text: 'Reservas', link: '/offers' },
        ]}
      />

      <div>
        {castList.length > 0 && !notFound && (
          <h2>{`Número de reservas: ${castList.length}`}</h2>
        )}
      </div>

      {castList.length > 0 &&
        !notFound &&
        castList.map(cast => (
          <ReservationBox>
            <img src={DummyImg} alt="dummy profile logo" />
            <ReservationInformations>
              <section>
                <h3>{cast.producer.name}</h3>
                <p>{`${cast.actress.genre} | $ ${cast.actress.price}`}</p>
                <div>
                  <FaCalendarAlt />
                  <p>{cast.reserveDate}</p>
                </div>
              </section>

              <section>
                <button
                  type="button"
                  onClick={() => handleDeclineReservation(cast.id)}
                >
                  RECUSAR
                </button>
              </section>
            </ReservationInformations>
          </ReservationBox>
        ))}
      {notFound && <p>Nenhum reservar encontrado, por favor aguarde.</p>}

      <AlertModal modal={alert}>
        <FaTimes onClick={toggleAlert} />
        <p>Reserva rejeitada!</p>
      </AlertModal>
    </OffersContainer>
  );
};

export default Offers;
