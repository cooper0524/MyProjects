import React, { createContext, useState, useEffect } from "react";
import firebase, { auth } from "../services/firebase";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      if (user) {
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              setAdmin(doc.data().admin);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });
      }
    });

    return () => {
      unlisten();
    };
  });
  return (
    <AdminContext.Provider value={{ admin }}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
