import {
  ItemList,
  ListOfContacts,
  ContactDetails,
  EditButton,
} from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDeleteContactsMutation } from 'redux/contactsAPI';
import { IoIosTrash } from 'react-icons/io';
import { AiFillEdit } from 'react-icons/ai';
import { iconSize } from 'constants';
import { Spiner } from 'utils/Spiner/Spiner';

const ContactList = ({ contacts, onEdit, getContactId }) => {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();

  return (
    <>
      {contacts.length > 0 ? (
        <ListOfContacts>
          {contacts.map(({ id, name, number }) => (
            <ItemList key={id}>
              <ContactDetails>
                {name}: {number}
              </ContactDetails>
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => deleteContacts(id)}
              >
                {isDeleting ? <Spiner /> : <IoIosTrash size={iconSize.md} />}
              </button>
              <EditButton
                type="button"
                onClick={() => {
                  onEdit();
                  getContactId(id);
                }}
              >
                <AiFillEdit size={iconSize.md} />
              </EditButton>
            </ItemList>
          ))}
        </ListOfContacts>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  getContactId: PropTypes.func.isRequired,
};
export default ContactList;
