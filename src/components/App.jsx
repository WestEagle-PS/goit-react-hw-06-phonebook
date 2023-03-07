import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import PhoneBook from './PhoneBook/PhoneBook';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PhoneBook />
      </PersistGate>
    </Provider>
  );
};
