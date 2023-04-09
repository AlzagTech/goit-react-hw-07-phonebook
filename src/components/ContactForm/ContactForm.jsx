import { Formik } from 'formik';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import {
  Form,
  FormInput,
  FormBtn,
  FormLabel,
  FormErrorMessage,
} from './ContactForm.styles';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.savedContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;

    const isContactRepeat = contacts.find(contact => contact.name === name);

    if (isContactRepeat) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    dispatch(addContact(name, number));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          <FormLabel>Name</FormLabel>
          <FormInput
            id="name"
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormErrorMessage name="name" component="span" />
        </label>

        <label htmlFor="number">
          <FormLabel>Number</FormLabel>
          <FormInput
            id="number"
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormErrorMessage name="number" component="span" />
        </label>

        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};
