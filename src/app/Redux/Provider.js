"use client"
import { store,persistor } from "./Store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
export function Providers({ children }) {
    return (
        <>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>{children}</Provider>
        </PersistGate>
        </>
    )
  }