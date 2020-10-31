import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import NavBar from '../../components/NavBar';

import DummyImg from '../../assets/profile-dummy.png';

import {
  OffersContainer,
  ReservationBox,
  ReservationInformations,
} from './styles';

const Offers = () => {
  return (
    <OffersContainer>
      <NavBar />

      <div>
        <h2>Número de reservas: 3</h2>
      </div>

      <ReservationBox>
        <img src={DummyImg} alt="dummy profile logo" />

        <ReservationInformations>
          <section>
            <h3>Anônimo Jones</h3>

            <p>Terror | $ 5.000,00</p>

            <div>
              <FaCalendarAlt />
              <p>23/10/2020 - 01/05/2021</p>
            </div>
          </section>

          <section>
            <button type="button">ACEITAR</button>
            <button type="button">RECUSAR</button>
          </section>
        </ReservationInformations>
      </ReservationBox>

      <ReservationBox>
        <img src={DummyImg} alt="dummy profile logo" />

        <ReservationInformations>
          <section>
            <h3>Anônimo Carl</h3>

            <p>Terror | $ 7.500,00</p>

            <div>
              <FaCalendarAlt />
              <p>23/10/2020 - 01/05/2021</p>
            </div>
          </section>

          <section>
            <button type="button">ACEITAR</button>
            <button type="button">RECUSAR</button>
          </section>
        </ReservationInformations>
      </ReservationBox>

      <ReservationBox>
        <img src={DummyImg} alt="dummy profile logo" />

        <ReservationInformations>
          <section>
            <h3>Anônimo Hugh</h3>

            <p>Terror | $ 6.900,00</p>

            <div>
              <FaCalendarAlt />
              <p>23/10/2020 - 01/05/2021</p>
            </div>
          </section>

          <section>
            <button type="button">ACEITAR</button>
            <button type="button">RECUSAR</button>
          </section>
        </ReservationInformations>
      </ReservationBox>
    </OffersContainer>
  );
};

export default Offers;
