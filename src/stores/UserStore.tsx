import { observable, action } from 'mobx';

import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default class UserStore {
    /* User State */
    @observable
    uid: string | null = null;
    @observable
    email: string | null = null;
    @observable
    name: string | null = null;

    @action
    setCurrentUser(user: FirebaseAuthTypes.User | null): void {
        if (user === null) {
            this.uid = null;
            this.email = null;
            this.name = null;
            return;
        }
        this.uid = user.uid;
        this.email = user.email;
        this.name = user.displayName;
    } 
}