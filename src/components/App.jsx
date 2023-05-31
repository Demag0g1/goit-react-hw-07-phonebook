import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const {  isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.container}>
      <div>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
             </div>
      <header>Phonebook</header>
      <ContactForm />
      <section>
        <Filter />
        <ContactList />
      </section>
    </section>
  );
};
