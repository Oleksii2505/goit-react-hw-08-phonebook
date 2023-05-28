import { configureStore } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./Auth/authSlice";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        contacts: contactReducer,
        filter: filterReducer       
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),   
})

export const persistor = persistStore(store);

