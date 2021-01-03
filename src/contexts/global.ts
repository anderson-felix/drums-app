import React from "react";
import { User } from "../interfaces/userModel";
import { makeAutoObservable } from "mobx";

class GlobalContext {
  constructor() {
    makeAutoObservable(this);
  }

  private _userData: User | undefined;
  set userData(value: User) {
    this._userData = value;
  }
  get userData() {
    return this._userData as User;
  }
}

export const globalContext = new GlobalContext();

export const useGlobalContext = () =>
  React.useContext(React.createContext(globalContext));
