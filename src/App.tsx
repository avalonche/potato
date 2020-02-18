import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from './hooks';

import Chat from './components/Chat';

const App = observer(() => {
  const { userStore } = useStores()

  useEffect(() => {
    const email = "shasha@shasha.com";
    const password = "potato";
    userStore.login(email, password);
  }, []);

  return (
    userStore.uid ? <Chat /> : null
  )
})

export default App;
