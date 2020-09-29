import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, game, loanTo, possession } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {game}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (possession === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {possession.charAt(0).toUpperCase() + possession.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {loanTo && (
          <li>
            <i className='fas fa-envelope-open' /> {loanTo}
          </li>
        )}
        {possession && (
          <li>
            <i className='fas fa-phone' /> {possession}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
