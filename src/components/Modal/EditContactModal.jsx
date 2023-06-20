import { Modal } from 'react-bootstrap';
import { ButtonModal } from './EditContactModal.styled';
import Form from 'components/Form/Form';
import PropTypes from 'prop-types';

export default function EditContactModal({ hide, onSubmit }) {
  return (
    <>
      <Modal show onHide={hide} size="sm" backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit} toggleModal={hide}>
            <ButtonModal variant="secondary" onClick={hide}>
              Close
            </ButtonModal>
            <ButtonModal variant="primary" type="submit">
              Edit
            </ButtonModal>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

EditContactModal.propTypes = {
  hide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
