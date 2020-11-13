import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { FaTimes, FaUserClock, FaCalendarAlt } from 'react-icons/fa';
import DummyImg from '../../../assets/profile-dummy.png';

import Dashboard from '../../Dashboard';

import { Overlay, Dialog, CardBox, CardInformations } from './styles';

Modal.setAppElement('#root');
const ModalMyReservations = () => {
  const [modalIsOpen, setModalisOpen] = useState(true);
  const closeModal = useCallback(() => {
    setModalisOpen(false);
  }, []);
  const openModal = useCallback(() => {
    setModalisOpen(true);
  }, []);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalisOpen(false)}>
      <Overlay>
        <Dialog>
          <div className="divCloseModal">
            <FaTimes onClick={closeModal} />
          </div>
          <h2 className="reservas">
            <div className="iconDiv">
              <FaUserClock />
            </div>
            Suas reservas
          </h2>
          <h5>Número de reservas: 3</h5>
          <CardBox>
            <img src={DummyImg} alt="dummy profile logo" />
            <CardInformations>
              <section>
                <h3>Anônimo Jones</h3>
                <p>Terror | $ 5.000,00</p>
                <div>
                  <FaCalendarAlt />
                  <p>11/11/2020 - 19/02/2021</p>
                </div>
              </section>
            </CardInformations>
          </CardBox>
        </Dialog>
      </Overlay>
      <Dashboard />
    </Modal>
  );
};

export default ModalMyReservations;
