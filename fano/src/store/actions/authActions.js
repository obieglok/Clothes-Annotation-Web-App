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
          email: newUser.email,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          annotationsCounter: 0
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


// TODO makeAdmin function
export const makeAdmin = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase()

      const addAdminFunc = firebase.functions().httpsCallable('addAdminRole')
      addAdminFunc(credentials).then((resp) => {
          console.log(resp)
          dispatch({ type: "ADMIN_CREATED" })
      }).catch((err) => {
          dispatch({ type: "NOT POSSIBLE TO CREATE ADMIN", err })
      })

  }
}

// TODO removeAdmin
export const removeAdmin = (credentials) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    firebase.auth().removeAdmin(
        credentials.email,
        credentials.password
    ).then(() => {
        dispatch({ type: "ADMIN REMOVED" })
    }).catch((err) => {
        dispatch({ type: "ADMIN NOT SUCCESSFULLY REMOVED", err })
    })

  }
} 



