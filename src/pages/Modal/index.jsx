import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import DummyImg from '../../assets/profile-dummy.png';

import Dashboard from '../Dashboard';

import { Overlay, Dialog, CalendarBox, CalendarInformations } from './styles';

Modal.setAppElement('#root');
const ModalPage = () => {
  const [modalIsOpen, setModalisOpen] = useState(false);
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
          <img className="profile" src={DummyImg} alt="dummy profile logo" />
          <h2>Anônimo Jones</h2>
          <h5>Terror | R$ 5.000,00</h5>
          <div>
            <CalendarBox>
              <div>
                <h3>Reservas</h3>
                <FaCalendarAlt color="white" />
              </div>
              <CalendarInformations>
                <li>14/03/2020 - 15/04/2020</li>
                <li>20/08/2020 - 13/09/2020</li>
                <li>30/10/2020 - 01/12/2020</li>
              </CalendarInformations>
            </CalendarBox>
          </div>
        </Dialog>
      </Overlay>
      <Dashboard />
    </Modal>
  );
};

export default ModalPage;
