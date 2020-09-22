import Rebase from 're-base';
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD26h4WPNkpFURtiaZhSVhGmgr065TGzhQ",
  authDomain: "base-chatbox-app.firebaseapp.com",
  databaseURL: "https://base-chatbox-app.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base