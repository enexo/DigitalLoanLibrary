import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        game: '',
        loanTo: '',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    game: '',
    loanTo: '',
  });

  const { game, loanTo } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Game' : 'Add Game'}
      </h2>
      <input
        type='text'
        placeholder='Game'
        name='game'
        value={game}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='On Loan To:'
        name='loanTo'
        value={loanTo}
        onChange={onChange}
      />

      <div>
        <input
          type='submit'
          value={current ? 'Update Game' : 'Add Game'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
