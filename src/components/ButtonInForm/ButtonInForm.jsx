import { ButtonAddContact } from './ButtonInForm.styled';
import { AiFillFileAdd } from 'react-icons/ai';
import { iconSize } from 'constants';
import { Spiner } from 'utils/Spiner/Spiner';
import PropTypes from 'prop-types';

export default function ButtonInForm({ isAddItems }) {
  return (
    <ButtonAddContact type="submit" disabled={isAddItems}>
      {isAddItems ? <Spiner /> : <AiFillFileAdd size={iconSize.md} />}
    </ButtonAddContact>
  );
}

ButtonInForm.propTypes = {
  isAddItems: PropTypes.bool.isRequired,
};
