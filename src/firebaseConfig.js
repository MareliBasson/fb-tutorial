import firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyA2EYkXuXjb-rBOMDPzPmBDweE2yV4GLhs',
	authDomain: 'fir-react-example-d28bb.firebaseapp.com',
	databaseURL: 'https://fir-react-example-d28bb.firebaseio.com',
	projectId: 'fir-react-example-d28bb',
	storageBucket: 'fir-react-example-d28bb.appspot.com',
	messagingSenderId: '524915779149',
	appId: '1:524915779149:web:ef0934b97fa87390989e04',
}
// Initialize Firebase
firebase.initializeApp(config)

export default firebase
