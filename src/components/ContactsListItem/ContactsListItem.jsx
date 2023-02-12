import PropTypes from 'prop-types';
import { ContactsItem, DeleteBtn } from './ContactsListLtem.styles';

export default function ContacsListItem({ name, number, onDelete }){
   return (
   <ContactsItem>
        <p>
            {name}: {number}    
        </p>    
        <DeleteBtn onClick={onDelete}>Delete</DeleteBtn>       
    </ContactsItem>)
};
ContacsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
