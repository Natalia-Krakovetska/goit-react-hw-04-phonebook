import PropTypes from 'prop-types';
import { Contacts } from './ContactsList.styles';
import ContacsListItem from '../ContactsListItem/ContactsListItem';

export function ContactsList({ contacts, onDelete }){
    return (
        <Contacts>
        {contacts.map(({ id, name, number }) => (
            <ContacsListItem
              key={id}
              name={name}
              number={number}
              onDelete={() => onDelete(id)}
            />
          ))}
        </Contacts>
    );
};
ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
  };