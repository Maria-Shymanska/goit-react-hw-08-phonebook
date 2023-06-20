import ButtonInForm from 'components/ButtonInForm/ButtonInForm';
import Form from 'components/Form/Form';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit, isAddItems }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <ButtonInForm isAddItems={isAddItems} />
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAddItems: PropTypes.bool.isRequired,
};
