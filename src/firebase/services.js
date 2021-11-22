import firebase from "./config";

// Firebase variables
const usersRef = firebase.firestore().collection("users");
const sessionsRef = firebase.firestore().collection("sessions");

// AUTH
const userSignOut = () => {
  firebase
    .auth()
    .signOut()
    .catch((error) => console.log(error.message));
};

// SESSIONS
const createSession = (
  authUser,
  dataUser,
  name,
  duration,
  location,
  selectedStartDate,
  participant,
  notes
) => {
  // data validation

  sessionsRef
    .add({
      coachUserId: authUser.uid,
      coachUsername: dataUser.username,
      durationMinutes: duration,
      lastOrderIndex: 100,
      location: location,
      name: name,
      notes: notes,
      participantUserId: [dataUser.id, participant.id],
      participantUsername: [dataUser.username, participant.username],
      startDateTime: selectedStartDate,
      status: "draft",
      type: "personal",
    })
    .then((docRef) => {
      sessionsRef.doc(docRef.id).update({
        id: docRef.id,
      });
      usersRef.doc(authUser.uid).update({
        sessions: firebase.firestore.FieldValue.arrayUnion(docRef.id),
      });
    });
};

export { createSession, userSignOut };
