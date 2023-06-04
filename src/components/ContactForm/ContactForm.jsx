import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';
import { addContact } from 'Redux/Contacts/operations';
import { selectContacts } from 'Redux/Contacts/selectors';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)

    const onFormSubmit = e => {
      e.preventDefault();
      const checkName = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (checkName) {
        alert(`${name} is already in contacts`)
        return;
      }
      dispatch(addContact({
        name: name,
        number: number,
      }));

      setName('');
      setNumber('');
    };
    
    const onInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
    
          default:
            break;
        }
      };

    return (
        <Form onSubmit={onFormSubmit}>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Enter contact name"
                    onChange={onInputChange}
                    value={name}
                />
            </Label>
            <Label>
            Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter contact number"
                    onChange={onInputChange}
                    value={number}
                />
            </Label>
            <SubmitBtn type="submit">Add contact</SubmitBtn>
        </Form>
    );
};

export default ContactForm;