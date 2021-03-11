import { firestoreReducer } from "redux-firestore";

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firebase = getFirebase()
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: "LOGIN_SUCCESS" })
        }).catch((err) => {
            dispatch({ type: "LOGIN_ERROR", err })
        })

    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: "SIGNOUT_SUCCESS" })
        }).catch((err) => {
            dispatch({ type: "SIGNOUT_ERROR", err })
        })
    }
}

// TODO signUp function
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    getFirebase()
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(async (resp) => {
        const newUserObject = {
          ...newUser,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        };

        await getFirestore()
          .collection("users")
          .doc(resp.user.uid)
          .set(newUserObject);
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_SUCCESS", err });
      });
  };
};

//Updated version from fork 

// TODO makeAdmin function

// TODO removeAdmin



