import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { ContactListStyle } from './ContactList.styled';

const ContactList = ({ visibleContact, onDelete }) => {
    return (
      <ContactListStyle>
        {visibleContact.map(({ name, id, number }) => {
          return (
            <ContactItem key={id} data={{ number, name, id }} onDelete={onDelete} />
          );
        })}
      </ContactListStyle>
    );
  };
  
  export default ContactList;
  
  ContactList.propTypes = {
    visibleContact: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
  };