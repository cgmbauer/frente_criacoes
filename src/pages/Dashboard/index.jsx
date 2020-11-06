import React, { useState } from 'react';

import NavBar from '../../components/NavBar';
import HeaderInterna from '../../components/HeaderInterna';

import DummyImg from '../../assets/profile-dummy.png';

import {
  OffersContainer,
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
    </OffersContainer>
  );
};

export default Dashboard;
