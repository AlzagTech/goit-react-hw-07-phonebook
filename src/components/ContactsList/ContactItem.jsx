import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';

import {
  Contact,
  ContactName,
  ContactNumber,
  ContactBtn,
} from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;

  const dispatch = useDispatch();

  const onDeleteBtnClick = id => {
    dispatch(removeContact(id));
  };

  return (
    <Contact>
      <div>
        <ContactName>{name}</ContactName>
        <ContactNumber>Tel: {number}</ContactNumber>
      </div>
      <ContactBtn type="button" onClick={() => onDeleteBtnClick(id)}>
        Delete
      </ContactBtn>
    </Contact>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
