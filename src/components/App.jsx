import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container/Container';
import { fetchContacts } from 'redux/operations';
import { selectError } from 'redux/selectors';
import { selectIsLoading } from 'redux/selectors';
import { Loader } from './Loader/Loader';
import { InfoTextBox } from './InfoTextBox/InfoTextBox';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        {isLoading && !error ? <Loader /> : <ContactsList />}
        {error && (
          <InfoTextBox>
            <p>Something went wrong!</p>
          </InfoTextBox>
        )}
      </Container>
    </>
  );
};
