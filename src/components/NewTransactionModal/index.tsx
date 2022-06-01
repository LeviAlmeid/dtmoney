import Modal from 'react-modal';
import cloeImg from '../../assets/close.svg'
import { Container } from './style';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className="react-modal-content"
    >

      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={cloeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" id="" placeholder='Titulo' />

        <input type="" id="" placeholder='Valor' />

        <input type="" id="" placeholder='Categoria' />

        <button type="submit">Cadastrar</button>


      </Container>
    </Modal>
  )
}