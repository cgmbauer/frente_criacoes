import React from 'react';

import { Link } from 'react-router-dom';

import HeaderExtern from '../../components/HeaderExterna';
import AdminLogo from '../../assets/admin.png';
import UserLogo from '../../assets/user.png';

import {
  HomeContainer,
  HomeTitle,
  HomeTitleText,
  BoxCardSelect,
  CardAdmin,
  CardUser,
} from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <HeaderExtern />
      <HomeTitle>
        <HomeTitleText>Escolha o tipo de usuário</HomeTitleText>
      </HomeTitle>

      <BoxCardSelect>
        <Link to="/admin-signin">
          <CardAdmin>
            <div>
              <img className="admin" src={AdminLogo} alt="admin logo" />
            </div>
            <p>Produtor</p>
          </CardAdmin>
        </Link>
        <Link to="/user-signin">
          <CardUser>
            <div>
              <img className="user" src={AdminLogo} alt="admin logo" />
            </div>
            <p>Ator/Atriz</p>
          </CardUser>
        </Link>
      </BoxCardSelect>
    </HomeContainer>
  );
};

export default Home;
