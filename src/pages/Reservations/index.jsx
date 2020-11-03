import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';

import DummyImg from '../../assets/profile-dummy.png';

import {
  ReservationsContainer,
  ReservationsBox,
  ReservationInformations,
} from './styles';

const Reservations = () => {
  return (
    <ReservationsContainer>
      <HeaderInterna />

      <NavBar />

      <ReservationsBox>
        <img className="profile" src={DummyImg} alt="dummy profile logo" />

        <ReservationInformations>
          <section>
            <h3>Anônimo Jones</h3>

            <p>Terror | $ 5.000,00</p>
          </section>
          <section>
            <div props="display:inline">
              <FaCalendarAlt />
              <p>23/10/2020 - 01/05/2021</p>
            </div>
          </section>
        </ReservationInformations>
      </ReservationsBox>
    </ReservationsContainer>
  );
};

export default Reservations;
