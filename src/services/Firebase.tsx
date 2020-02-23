import firebase, { ReactNativeFirebase } from '@react-native-firebase/app';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import config from '../AppConfig';
import { COLLECTIONS } from '../constants';

interface SignInInformation {
    email: string,
    password: string,
}

interface Message {
    message: string,
    uid: string,
}

class FireBaseService {
    app: ReactNativeFirebase.FirebaseApp;
    auth: FirebaseAuthTypes.Module;
    db: FirebaseFirestoreTypes.Module;
    msgRef: FirebaseFirestoreTypes.CollectionReference;

    constructor() {
        if (firebase.apps.length === 0) {
            this.app = firebase.initializeApp(config);
        } else {
            this.app = firebase.app();
        }
        this.auth = auth();
        this.db = firestore();
        this.msgRef = this.db.collection(COLLECTIONS.MESSAGES);
    }

    async signIn (signInInfo: SignInInformation) {
        try {
            const { email, password } = signInInfo;
            const response = await this.auth.signInWithEmailAndPassword(email, password)
            return { user: response.user }
        } catch (error) {
            return { error }
        }
    }

    async fetchMessages () {
        const msgs = await this.msgRef
            .orderBy('created_at', 'desc')
            .limit(10)
            .get()

        return msgs.docs;
    }

    async createMessage (msg: Message) {
        const { message, uid } = msg;
        await this.msgRef.add({
            message,
            user_id: uid,
            created_at: new Date()
        })
    }
}

export default FireBaseService
