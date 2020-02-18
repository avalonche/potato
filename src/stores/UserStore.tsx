import { observable, action } from 'mobx';

import { firebaseService } from '../services';

export default class UserStore {
    /* User State */
    @observable
    uid: string | undefined;
    @observable
    name: string = '';

    @action
    async login(email: string, password: string) {
        this.uid = await firebaseService.signIn({ email, password })
            .then(({ user }) => {
                return user ? user.uid : user
            });
        }
}