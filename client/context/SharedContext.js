import { createContext, useState } from 'react';

export const SharedStateContext = createContext();

export function SharedContext({ children }) {
    const [fetchPostData, setFetchPostData] = useState(true);
    const [onlineUsers, setOnlineUser] = useState();

    const props = {
        fetchPostData,
        setFetchPostData,
        onlineUsers,
        setOnlineUser
    }

    return (
        <SharedStateContext.Provider value={props}>
            {children}
        </SharedStateContext.Provider>
    );
}