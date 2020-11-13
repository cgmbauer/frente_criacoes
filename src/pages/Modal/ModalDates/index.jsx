import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { FaTimes, FaRegCalendarAlt } from 'react-icons/fa';

import Dashboard from '../../Dashboard';

import { Overlay, Dialog, CardBox } from './styles';

Modal.setAppElement('#root');
const ModalDates = () => {
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
              <FaRegCalendarAlt />
            </div>
            Datas em alta
          </h2>
          <CardBox>20/12/2020</CardBox>
          <CardBox>10/01/2021</CardBox>
        </Dialog>
      </Overlay>
      <Dashboard />
    </Modal>
  );
};

export default ModalDates;
