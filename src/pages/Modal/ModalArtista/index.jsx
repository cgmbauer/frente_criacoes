import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { FaTimes, FaTrophy } from 'react-icons/fa';

import Dashboard from '../../Dashboard';

import { Overlay, Dialog, CardBox } from './styles';

Modal.setAppElement('#root');
const ModalArtists = () => {
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
          <h2>
            <div className="iconDiv">
              <FaTrophy />
            </div>
            Top artistas
          </h2>
          <CardBox>
            <h3>1 - Anônimo da Silva Pereira</h3>
          </CardBox>
          <CardBox>
            <h3>2 - Elicreusa Rosanna de Ruanda</h3>
          </CardBox>
        </Dialog>
      </Overlay>
      <Dashboard />
    </Modal>
  );
};

export default ModalArtists;
