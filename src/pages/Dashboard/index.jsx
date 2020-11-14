import React, { useCallback, useEffect, useState } from 'react';

import Modal from 'react-modal';

import {
  FaCalendarAlt,
  FaTrophy,
  FaUserClock,
  FaTimes,
  FaRegCalendarAlt,
} from 'react-icons/fa';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

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
  Overlay,
  Dialog,
  CalendarBox,
  CalendarInformations,
  DialogMyReservations,
  CardBoxMyReservations,
  CardInformationsMyReservations,
  DialogDates,
  CardBoxDates,
  DialogArtist,
  CardBoxArtist,
} from './styles';

Modal.setAppElement('#root');
const Dashboard = () => {
  const { user } = useAuth();
  const [artistReservationsDates, setArtistReservationsDates] = useState([]);

  const [artistList, setArtistList] = useState([]);

  const [dataTransfer, setDataTransfer] = useState([]);

  const [cardBoxModal, setCardBoxModal] = useState(false);

  const toggleCardBoxModal = useCallback(
    artistId => {
      api.get(`reserve/listByActress/${artistId}`).then(response => {
        const artistDateReservation = response.data.map(date =>
          date.reserveDate.split('-').reverse().join('/'),
        );

        setArtistReservationsDates(artistDateReservation);
      });

      const transferArtistData = artistList.filter(
        artist => artist.id === artistId,
      );

      setDataTransfer(transferArtistData[0]);

      setCardBoxModal(!cardBoxModal);
    },
    [artistList, cardBoxModal],
  );

  const [reservationsModal, setReservationsModal] = useState(false);

  const toggleReservationsModal = useCallback(() => {
    setReservationsModal(!reservationsModal);
  }, [reservationsModal]);

  const [dateModal, setDateModal] = useState(false);

  const toggleDateModal = useCallback(() => {
    setDateModal(!dateModal);
  }, [dateModal]);

  const [artistModal, setArtistModal] = useState(false);

  const toggleArtistModal = useCallback(() => {
    setArtistModal(!artistModal);
  }, [artistModal]);

  useEffect(() => {
    async function getArtistsList() {
      const response = await api.get('actress/list');

      if (response.data.length > 0) {
        const artistsData = response.data;

        const artistDataWIthCapitalGenre = artistsData.map(artist => ({
          ...artist,
          genre: artist.genre.charAt(0).toUpperCase() + artist.genre.slice(1),
        }));

        setArtistList(artistDataWIthCapitalGenre);
      }
    }

    getArtistsList();
  }, []);

  const handleFilters = useCallback(async event => {
    console.log(event.target.value);
    const eventValue = event.target.value;

    const response = await api.get('actress/list');

    if (response.data.length > 0) {
      const artistsData = response.data;

      const artistDataWithCapitalGenre = artistsData.map(artist => ({
        ...artist,
        genre: artist.genre.charAt(0).toUpperCase() + artist.genre.slice(1),
      }));

      if (eventValue === 'relevancia') {
        setArtistList(
          artistDataWithCapitalGenre.sort((a, b) => b.relevance - a.relevance),
        );
      } else if (eventValue === 'maior-preco') {
        setArtistList(
          artistDataWithCapitalGenre.sort((a, b) => b.price - a.price),
        );
      } else if (eventValue === 'menor-preco') {
        setArtistList(
          artistDataWithCapitalGenre.sort((a, b) => a.relevance - b.relevance),
        );
      } else {
        setArtistList(artistDataWithCapitalGenre);
      }
    }
  }, []);

  const handleFilterStatus = useCallback(
    async event => {
      console.log(event.target.value);

      const eventValue = event.target.value;

      const response = await api.get('actress/list');

      if (response.data.length > 0) {
        const artistsData = response.data;

        const artistDataWithCapitalGenre = artistsData.map(artist => ({
          ...artist,
          genre: artist.genre.charAt(0).toUpperCase() + artist.genre.slice(1),
        }));

        if (eventValue === 'true') {
          setArtistList(artistList.filter(artist => artist.status));
        } else if (eventValue === 'false') {
          setArtistList(artistList.filter(artist => !artist.status));
        } else {
          setArtistList(artistDataWithCapitalGenre);
        }
      }
    },
    [artistList],
  );

  const [reservationsQuantity, setReservationsQuantity] = useState(0);
  const [daysRanking, setdaysRanking] = useState([]);
  const [topThreeDays, setTopThreeDays] = useState([]);
  const [artistsRanking, setArtistsRanking] = useState([]);
  const [topThreeArtists, setTopThreeArtists] = useState([]);
  const [adminReservations, setAdminReservations] = useState([]);

  const arrangeTopDays = useCallback(objectTopDays => {
    const arrayOfDays = Object.keys(objectTopDays);

    arrayOfDays.sort((a, b) => objectTopDays[b] - objectTopDays[a]);

    const daysWithBackSlash = arrayOfDays.map(days =>
      days.split('-').reverse().join('/'),
    );

    setdaysRanking(daysWithBackSlash);

    daysWithBackSlash.splice(3);
    setTopThreeDays(daysWithBackSlash);
  }, []);

  const arrangeReservationList = useCallback(arrayReservationList => {
    const objectOfMostReservedArtists = {};

    arrayReservationList.forEach(list => {
      if (
        Object.keys(objectOfMostReservedArtists).includes(
          String(list.actress.id),
        )
      ) {
        Object.assign(objectOfMostReservedArtists, {
          [String(list.actress.id)]: {
            quantity: objectOfMostReservedArtists[list.actress.id].quantity + 1,
            name: list.actress.name,
          },
        });
      } else {
        Object.assign(objectOfMostReservedArtists, {
          [String(list.actress.id)]: { quantity: 1, name: list.actress.name },
        });
      }
    });

    const arrayOfArtistsIds = Object.keys(objectOfMostReservedArtists);

    arrayOfArtistsIds.sort(
      (a, b) =>
        objectOfMostReservedArtists[b].quantity -
        objectOfMostReservedArtists[a].quantity,
    );

    const nameOfTopArtists = arrayOfArtistsIds.map(
      id => objectOfMostReservedArtists[id].name,
    );

    setArtistsRanking(nameOfTopArtists);

    nameOfTopArtists.splice(3);

    setTopThreeArtists(nameOfTopArtists);
  }, []);

  const arrangeReservationPageFormat = useCallback(producerReservationList => {
    const artistDataWIthCapitalGenre = producerReservationList.map(artist => ({
      ...artist,
      actress: Object.assign(artist.actress, {
        genre:
          artist.actress.genre.charAt(0).toUpperCase() +
          artist.actress.genre.slice(1),
      }),
      reserveDate: artist.reserveDate.split('-').reverse().join('/'),
    }));

    setAdminReservations(artistDataWIthCapitalGenre);
  }, []);

  useEffect(() => {
    async function producerData() {
      const [
        numberOfReservations,
        topDays,
        reservationList,
      ] = await Promise.all([
        api.get(`reserve/countByProducer/${user.id}`),
        api.get(`reserve/getMostReservedDatesByProducer/${user.id}`),
        api.get(`reserve/listByProducer/${user.id}`),
      ]);

      arrangeTopDays(topDays.data);

      arrangeReservationList(reservationList.data);

      arrangeReservationPageFormat(reservationList.data);

      setReservationsQuantity(numberOfReservations.data);
    }

    producerData();
  }, [
    arrangeReservationList,
    arrangeReservationPageFormat,
    arrangeTopDays,
    user.id,
  ]);
  return (
    <>
      <OffersContainer>
        <HeaderInterna />
        <NavBar
          navProps={[
            { text: 'Seu perfil', link: '/admin-profile' },
            { text: 'Buscas', link: '/admin-search' },
            { text: 'Dashboard', link: '/dashboard' },
          ]}
        />

        <StatisticBox>
          <ReservationSection onClick={toggleReservationsModal}>
            <div>
              <h4>Número de reservas</h4>
              <FaUserClock />
            </div>
            <p>{reservationsQuantity}</p>
          </ReservationSection>

          <DateSection onClick={toggleDateModal}>
            <div>
              <h4>Dias em alta</h4>
              <FaCalendarAlt />
            </div>
            {topThreeDays.length > 0 &&
              topThreeDays.map(days => <p key={days}>{days}</p>)}
          </DateSection>

          <TopSection onClick={toggleArtistModal}>
            <div>
              <h4>Top artistas</h4>
              <FaTrophy />
            </div>
            {topThreeArtists.length > 0 &&
              topThreeArtists.map((artist, index) => (
                <p key={artist}>{`${index + 1}º ${artist}`}</p>
              ))}
          </TopSection>
        </StatisticBox>

        <FilterBox>
          <h3>Filtrar:</h3>

          <select onChange={handleFilters}>
            <option value="reset">Todos</option>
            <option value="relevancia">Relevância</option>
            <option value="maior-preco">Maior preço</option>
            <option value="menor-preco">Menor preço</option>
          </select>

          <select onChange={handleFilterStatus}>
            <option value="reset">Status</option>
            <option value="true">Disponível</option>
            <option value="false">Indisponível</option>
          </select>
        </FilterBox>
        {artistList.map(artists => (
          <CardBox
            key={artists.id}
            onClick={() => toggleCardBoxModal(artists.id)}
          >
            <img src={DummyImg} alt="dummy profile logo" />

            <CardInformations>
              <section>
                <h3>{artists.name}</h3>

                <p>{`${artists.genre} | $ ${artists.price}`}</p>
              </section>

              <AvailableSection isAvailable={artists.status}>
                <p>{artists.status ? 'Disponível' : 'Indisponível'}</p>
              </AvailableSection>
            </CardInformations>
          </CardBox>
        ))}
      </OffersContainer>
      <Modal isOpen={cardBoxModal} onRequestClose={toggleCardBoxModal}>
        <Overlay>
          <Dialog>
            <div className="divCloseModal">
              <FaTimes onClick={toggleCardBoxModal} />
            </div>
            <img className="profile" src={DummyImg} alt="dummy profile logo" />

            {dataTransfer && <h2>{dataTransfer.name}</h2>}
            {dataTransfer && (
              <h5>{`${dataTransfer.genre} | $ ${dataTransfer.price}`}</h5>
            )}
            <div>
              <CalendarBox>
                <div>
                  <h3>Reservas</h3>
                  <FaCalendarAlt color="white" />
                </div>
                <CalendarInformations>
                  {artistReservationsDates.length > 0 ? (
                    artistReservationsDates.map(dates => (
                      <p key={dates}>{dates}</p>
                    ))
                  ) : (
                    <p>Aguardando novas reservas.</p>
                  )}
                </CalendarInformations>
              </CalendarBox>
            </div>
          </Dialog>
        </Overlay>
        <Dashboard />
      </Modal>
      <Modal
        isOpen={reservationsModal}
        onRequestClose={toggleReservationsModal}
      >
        <Overlay>
          <DialogMyReservations>
            <div className="divCloseModal">
              <FaTimes onClick={toggleReservationsModal} />
            </div>
            <h2 className="reservas">
              <div className="iconDiv">
                <FaUserClock />
              </div>
              Suas reservas
            </h2>
            <h5>{`Número de reservas: ${reservationsQuantity}`}</h5>
            {adminReservations.length > 0 &&
              adminReservations.map(reservation => (
                <CardBoxMyReservations key={reservation.id}>
                  <img src={DummyImg} alt="dummy profile logo" />
                  <CardInformationsMyReservations>
                    <section>
                      <h3>{reservation.actress.name}</h3>
                      <p>{`${reservation.actress.genre} | $ ${reservation.actress.price}`}</p>
                      <div>
                        <FaCalendarAlt />
                        <p>{reservation.reserveDate}</p>
                      </div>
                    </section>
                  </CardInformationsMyReservations>
                </CardBoxMyReservations>
              ))}
          </DialogMyReservations>
        </Overlay>
        <Dashboard />
      </Modal>
      <Modal isOpen={dateModal} onRequestClose={toggleDateModal}>
        <Overlay>
          <DialogDates>
            <div className="divCloseModal">
              <FaTimes onClick={toggleDateModal} />
            </div>
            <h2 className="reservas">
              <div className="iconDiv">
                <FaRegCalendarAlt />
              </div>
              Datas em alta
            </h2>
            {daysRanking.length > 0 &&
              daysRanking.map(days => (
                <CardBoxDates key={days}>{days}</CardBoxDates>
              ))}
          </DialogDates>
        </Overlay>
        <Dashboard />
      </Modal>
      <Modal isOpen={artistModal} onRequestClose={toggleArtistModal}>
        <Overlay>
          <DialogArtist>
            <div className="divCloseModal">
              <FaTimes onClick={toggleArtistModal} />
            </div>
            <h2>
              <div className="iconDiv">
                <FaTrophy />
              </div>
              Top artistas
            </h2>
            {artistsRanking.length > 0 &&
              artistsRanking.map((artists, index) => (
                <CardBoxArtist>
                  <h3 key={artists}>{`${index + 1}º ${artists}`}</h3>
                </CardBoxArtist>
              ))}
          </DialogArtist>
        </Overlay>
        <Dashboard />
      </Modal>
    </>
  );
};

export default Dashboard;
