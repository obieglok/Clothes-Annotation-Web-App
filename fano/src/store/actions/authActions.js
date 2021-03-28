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


//this should reference a form in index.html called adminForm
const adminForm = documents.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //reference to adminEmail on front end
  const adminEmail = document.querySelector('#admin-email').value;
  const addAdminRole = functions .httpsCallable('addAdminRole');
  addAdminRole({email: adminEmail}).then(result => {
    console.log(result);
  });
});


auth.OnAuthStateChanged(user => {
  if (user) {
    user.getIdTokenResult().then(getIdTokenResult => {
      // attach admin property to user, if user not admin user property will be null or undefined
      user.admin = getIdTokenResult.claims.admin
    })
    //Setup UI
  } else {

  }
 
  });





   
// TODO removeAdmin




