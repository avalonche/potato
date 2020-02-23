import { createContext } from 'react';
import { ThemeStore, UserStore } from '../stores';

export default createContext({
    themeStore: new ThemeStore(),
    userStore: new UserStore(),
})