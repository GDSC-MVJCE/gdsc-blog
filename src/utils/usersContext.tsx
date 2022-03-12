import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "./db";

export const UsersContext = createContext<IUserContext>({
  user: null,
  SigninWithGoogle: async function () {},
  SignOut: async function () {},
});

export function UsersContextProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(auth.currentUser);

  onAuthStateChanged(auth, (usr) => {
    setUser(usr);
  });

  async function SigninWithGoogle() {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    setUser(result.user);
  }

  const SignOut = async () => await auth.signOut();

  const state: IUserContext = {
    user,
    SignOut,
    SigninWithGoogle,
  };

  return (
    <UsersContext.Provider value={state}>{children}</UsersContext.Provider>
  );
}
