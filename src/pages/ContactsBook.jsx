import { ContactsContainer, FilterContainer } from './ContactsBook.styled';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter';
import ContactForm from 'components/ContactForm/ContactForm';

const ContactsBook = () => {
  return (
    <ContactsContainer>
      <ContactForm />
      <FilterContainer>
        <Filter />
        <ContactList />
      </FilterContainer>
    </ContactsContainer>
  );
};

export default ContactsBook;