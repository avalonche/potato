import { observable, action } from 'mobx';

import { firebaseService } from '../services';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default class UserStore {
    /* User State */
    @observable
    uid: string | undefined;
    @observable
    email: string | null = null;
    @observable
    name: string | null = null;

    @action
    setCurrentUser(user: FirebaseAuthTypes.User) {
        this.uid = user.uid;
        this.email = user.email;
        this.name = user.displayName;
    } 
}