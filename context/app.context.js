import { createContext, useContext, useEffect, useState } from 'react';

export const AppContext = createContext({});

export function useAppContext() {
    return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        async function getData() {
            const request = await fetch(`/json/project.json`);
            const response = await request.json();

            setPost(response);
            setLoading(false);
        }
        getData();
    }, []);

    const appContextValue = {
        post,
        setPost,
        loading,
        setLoading,
    };

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    );
}
