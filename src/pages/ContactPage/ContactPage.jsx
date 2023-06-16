import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { ToastContainer } from 'react-toastify';

function ContactPage() {
  return (
    <>
      <Section>
        <div>
          <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>Phonebook</h1>
          <ContactForm />

          <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>Contacts</h2>
          <Filter />

          <ContactList />
        </div>
        <ToastContainer />
      </Section>
    </>
  );
}

export default ContactPage;