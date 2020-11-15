import React, { useCallback, useState, useEffect } from 'react';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import api from '../../services/api';

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
  const [castList, setCastList] = useState('');

  const [reservas, setReservas] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [alert, setAlert] = useState(false);

  const [data, setData] = useState(() => {
    const user = localStorage.getItem('@Remote: user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {};
  });
  const toggleAlert = useCallback(() => {
    setAlert(!alert);
  }, [alert]);

  const handleDeclineReservation = useCallback(
    async castId => {
      try {
        const response = await api.get(
          `/reserve/listByActress/${data.user.id}`,
        );
        await api.delete(`/reserve/delete?id=${castId}`);
        toggleAlert();
        setCastList(response.data);
      } catch (err) {
        console.log(
          err,
          'Não foi possível recursar o agendamento, por favor tente novamente.',
        );
      }
    },
    [toggleAlert],
  );

  useEffect(() => {
    async function getReserveList() {
      const response = await api.get(`/reserve/listByActress/${data.user.id}`);
      if (response.data.length > 0) {
        const reserveData = response.data;
        setCastList(reserveData);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    }
    getReserveList();
  }, []);

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
          <h2>
            Número de reservas:
            {`  `}
            {castList.length}
          </h2>
        )}
      </div>

      {castList.length > 0 &&
        !notFound &&
        castList.map(cast => (
          <ReservationBox>
            <img src={DummyImg} alt="dummy profile logo" />
            <ReservationInformations>
              <section>
                <h3>
                  {cast.producer.name.charAt(0).toUpperCase() +
                    cast.producer.name.slice(1)}
                </h3>
                <p>
                  {cast.actress.genre}
                  {` |   R$ `}
                  {cast.actress.price}
                </p>
                <div>
                  <FaCalendarAlt />
                  <p>{cast.reserveDate.split('-').reverse().join('/')}</p>
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
