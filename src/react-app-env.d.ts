/// <reference types="react-scripts" />

interface IUserContext {
  user: User | null;
  SigninWithGoogle: () => Promise<void>;
  SignOut: () => Promise<void>;
}
