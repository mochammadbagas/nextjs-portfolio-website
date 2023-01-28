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
            const request = await fetch(
                `https://gist.githubusercontent.com/mochammadbagas/55ad7d299d3dcb20ab3c96fd46924a98/raw/acb52592632afcfdf6f5fbe0e8e232a10477356d/project`
            );
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
