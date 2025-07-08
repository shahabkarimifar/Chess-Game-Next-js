"use client";
import { createBoardState, reducer } from "@/helper";

const { createContext, useContext, useReducer } = require("react");

const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

export default function MainContextProvider({ children }) {
  const initialAppState = {
    turn: "w",
    position: [createBoardState()],
  };
  const [appState, dispatch] = useReducer(reducer, initialAppState);
  return (
    <MainContext.Provider value={{ appState, dispatch }}>
      {children}
    </MainContext.Provider>
  );
}
