import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

import {
  Contact,
  ContactName,
  ContactNumber,
  ContactBtn,
} from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const { name, phone, id } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Contact>
      <div>
        <ContactName>{name}</ContactName>
        <ContactNumber>Tel: {phone}</ContactNumber>
      </div>
      <ContactBtn type="button" onClick={handleDelete}>
        Delete
      </ContactBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
