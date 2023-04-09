import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container/Container';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>
      <Container>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
};
