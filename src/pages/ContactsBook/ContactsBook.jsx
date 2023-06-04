import { ContactsContainer, Title } from './ContactsBook.styled';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { useSelector } from "react-redux";

import { useAuth } from 'hooks';
import { selectError } from 'Redux/Contacts/selectors';

const ContactsBook = () => {
 
  const isLoading = useAuth();
  const error = useSelector(selectError);
  
  return (
    <ContactsContainer>
      <ContactForm />
      <Title>Contacts</Title>     
        <Filter />
         {isLoading && !error && (
          <b>Request in progress...</b>
        )}
        <ContactList />
      
    </ContactsContainer>
  );
};

export default ContactsBook;