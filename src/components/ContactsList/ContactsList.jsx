import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';

import { List } from './ContactList.styled';
import {
  selectContacts,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

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
