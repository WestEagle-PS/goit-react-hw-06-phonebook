import { useDispatch, useSelector } from 'react-redux';
import { getFilteredItems } from 'redux/contacts/contacts-selectors';
import { deleteContacts } from 'redux/contacts/contacts-slice';

import css from './contact-list.module.scss';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFilteredItems);
  const elements = filteredContacts.map(({ id, name, number }) => (
    <li className={css.listItem} key={id}>
      {name}: {number}{' '}
      <button className={css.btn} onClick={() => dispatch(deleteContacts(id))}>
        delete
      </button>
    </li>
  ));

  return <ol className={css.list}>{elements}</ol>;
};

export default ContactList;
