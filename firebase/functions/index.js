const functions = require('firebase-functions')
const admin = require('firebase-admin')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp(functions.config().firebase)
exports.addUserToDB = functions.auth.user().onCreate(user => {
  admin
    .database()
    .ref('/users/' + user.uid)
    .set({
      name: user.displayName,
      email: user.email,
    })
})

exports.removeUserFromDB = functions.auth.user().onDelete(user => {
  admin
    .database()
    .ref('/users/' + user.uid)
    .delete()
})
