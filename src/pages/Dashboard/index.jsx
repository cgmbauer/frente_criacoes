import React from 'react';

import { FaCalendarAlt, FaTrophy, FaUserClock } from 'react-icons/fa';
import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';

import DummyImg from '../../assets/profile-dummy.png';

import {
  OffersContainer,
  StatisticBox,
  ReservationSection,
  DateSection,
  TopSection,
  FilterBox,
  CardBox,
  CardInformations,
  AvailableSection,
} from './styles';

const Dashboard = () => {
  return (
    <OffersContainer>
      <HeaderInterna />
      <NavBar
        navProps={[
          { text: 'Seu perfil', link: '/admin-profile' },
          { text: 'Buscas', link: '/search' },
          { text: 'Dashboard', link: '/dashboard' },
        ]}
      />

      <StatisticBox>
        <ReservationSection>
          <div>
            <h4>Número de reservas</h4>
            <FaUserClock />
          </div>
          <p>435</p>
        </ReservationSection>

        <DateSection>
          <div>
            <h4>Meses em alta</h4>
            <FaCalendarAlt />
          </div>
          <p>Abril</p>
          <p>Agosto</p>
          <p>Setembro</p>
        </DateSection>

        <TopSection>
          <div>
            <h4>Top artistas</h4>
            <FaTrophy />
          </div>
          <p>1º Anônimo da Silva Pereira</p>
          <p>2º Elicreusa Rosana de Ruanda</p>
          <p>3º Joseph José João</p>
        </TopSection>
      </StatisticBox>

      <FilterBox>
        <h3>Filtrar:</h3>

        <select>
          <option value="relevancia">Relevância</option>
          <option value="maior-preco">Maior preço</option>
          <option value="menor-preco">Menor preço</option>
        </select>

        <select>
          <option value="">Status</option>
          <option value="disponivel">Disponível</option>
          <option value="indisponivel">Indisponível</option>
        </select>
      </FilterBox>

      <CardBox>
        <img src={DummyImg} alt="dummy profile logo" />

        <CardInformations>
          <section>
            <h3>Anônimo Jones</h3>

            <p>Terror | $ 5.000,00</p>
          </section>

          <AvailableSection isAvailable>
            <p>DISPONÍVEL</p>
          </AvailableSection>
        </CardInformations>
      </CardBox>

      <CardBox>
        <img src={DummyImg} alt="dummy profile logo" />

        <CardInformations>
          <section>
            <h3>Anônimo Jones</h3>

            <p>Terror | $ 5.000,00</p>
          </section>

          <AvailableSection isAvailable={false}>
            <p>INDISPONÍVEL</p>
          </AvailableSection>
        </CardInformations>
      </CardBox>
    </OffersContainer>
  );
};

export default Dashboard;
