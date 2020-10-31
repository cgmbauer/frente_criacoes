import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import NavBar from '../../components/NavBar';
import Logo from '../../assets/remoto_logo.svg';
import DummyImg from '../../assets/profile-dummy.png';

import {
  ReservationsContainer,
  ReservationsBox,
  ReservationInformations,
} from './styles';

const Reservations = () => {
  return (
    <ReservationsContainer>
      <img className="logo" src={Logo} alt=" " />
      <NavBar />
      <ReservationsBox>
        <div>
          <img className="profile" src={DummyImg} alt="dummy profile logo" />
        </div>

        <ReservationInformations>
          <section>
            <h3>Anônimo Jones</h3>

            <p>Terror | $ 5.000,00</p>
          </section>
          <section>
            <FaCalendarAlt />
            <p>23/10/2020 - 01/05/2021</p>
          </section>
        </ReservationInformations>
      </ReservationsBox>
    </ReservationsContainer>
  );
};

export default Reservations;
