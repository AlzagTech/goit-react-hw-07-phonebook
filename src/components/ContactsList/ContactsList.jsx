import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';

import { List } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.savedContacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  const visibleContactsLength = visibleContacts.length;
  const contactsLength = contacts.length;

  return (
    <>
      {contactsLength === 0 ? (
        <p>You have no contacts yet...</p>
      ) : visibleContactsLength === 0 ? (
        <p>No results in your contacts...</p>
      ) : (
        <List>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
