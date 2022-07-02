import PropTypes from 'prop-types';
import { ContactItemList,ContactButton,ContactName } from './ContactItem.styled';


const ContactItem =({data, onDelete})=> {
    const {number,name,id}=data;
    return (
        <ContactItemList>
            <ContactName>{name}</ContactName>
            <ContactName>{number}</ContactName>
            <ContactButton type="button" onClick={()=>onDelete(id)}>delete</ContactButton>
        </ContactItemList>
    )
};

export default ContactItem;

ContactItem.propTypes={
    data:PropTypes.shape({
        number:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired,
    }),
    onDelete:PropTypes.func.isRequired,
};
