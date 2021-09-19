import React from 'react';
import Toast from 'react-native-toast-message'
import Navigation from '../navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
