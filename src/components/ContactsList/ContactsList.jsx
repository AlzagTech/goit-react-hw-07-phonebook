import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';

import { List } from './ContactList.styled';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';
import { InfoTextBox } from 'components/InfoTextBox/InfoTextBox';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  const visibleContactsLength = visibleContacts.length;
  const contactsLength = contacts.length;

  return (
    <>
      {contactsLength === 0 ? (
        <InfoTextBox>You have no contacts yet...</InfoTextBox>
      ) : visibleContactsLength === 0 ? (
        <InfoTextBox>No results in your contacts...</InfoTextBox>
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
