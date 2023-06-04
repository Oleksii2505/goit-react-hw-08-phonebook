import { ContactsContainer, Title } from './ContactsBook.styled';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAuth } from 'hooks';
import { selectError } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';
// import Loader from 'components/Loader';

const ContactsBook = () => {
  const dispatch = useDispatch();
  const isLoading = useAuth();
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <ContactsContainer>
      <ContactForm />
      <Title>Contacts</Title>     
        <Filter />
        {/* {isLoading  && <Loader/>}
        {error && <h2>{error}</h2>} */}
         {isLoading && !error && (
          <b>Request in progress...</b>
        )}


        <ContactList />
      
    </ContactsContainer>
  );
};

export default ContactsBook;