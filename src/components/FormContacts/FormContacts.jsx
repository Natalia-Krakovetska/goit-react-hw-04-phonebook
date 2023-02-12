import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn } from './FormContacts.styles';

export const FormContacts = ({ onSubmit })=> {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");


  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ name, number });
      reset();
    };


    const reset = () => {
    setName("");
    setNumber("");
    };


  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

FormContacts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  };




  

