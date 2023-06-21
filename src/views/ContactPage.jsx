import toast, { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import {
  useFetchContactsQuery,
  useCreacteContactMutation,
  useUpdateContactMutation,
} from '../redux/contactsAPI';

import { useState } from 'react';
import { GlobalLoader } from 'utils/Skeleton/skeleton';
import UseModal from '../utils/UseModal/UseModal';
import EditContactModal from 'components/Modal/EditContactModal';

export default function App() {
  const [filteredItems, setFilteredItems] = useState('');
  const [contactId, setContactId] = useState('');
  const { isShowing, toggle } = UseModal();
  const { data } = useFetchContactsQuery();
  const [creacteContact, { isLoading }] = useCreacteContactMutation();
  const [updateContacts] = useUpdateContactMutation();

  const addNewContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
    };
    if (
      data.some(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      return toast.error(`${name} is already in contacts!`);
    }

    return creacteContact(newContact);
  };

  const changeFilter = e => {
    setFilteredItems(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filteredItems.toLowerCase();
    return data.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  };

  const getContactId = id => {
    setContactId(id);
  };

  const updateContact = contact => {
    const newUpdateContact = { contactId, ...contact };
    updateContacts(newUpdateContact);
  };

  return (
    <div>
      {isShowing && <EditContactModal hide={toggle} onSubmit={updateContact} />}
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} isAddItems={isLoading} />
      <Toaster />
      <h2>Contacts</h2>
      <Filter value={filteredItems} onChange={changeFilter} />
      {data ? (
        <ContactList
          contacts={getVisibleContacts()}
          onEdit={toggle}
          getContactId={getContactId}
        />
      ) : (
        <GlobalLoader />
      )}
    </div>
  );
}
