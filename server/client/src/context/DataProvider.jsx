// helps to use state as globally 
// Context provides a way to pass data through the component tree 
// without having to pass props down manually at every level.

import { createContext, useState } from "react";
export const DataContext = createContext(); //context of name-- DataContext


const DataProvider = function ({children}) {  //as DataProvider gives value to many children components in app.js than we have to pass children as a props
    const [user_name,set_user_name] = useState('');
    const [Login_Dialog_Presence_Condition , Login_Dialog_Presence_Condition_toggle ] = useState(false);
    
    return (
        <DataContext.Provider value={
          { userName:[user_name,set_user_name], loginDialog:[Login_Dialog_Presence_Condition , Login_Dialog_Presence_Condition_toggle]}  //As an array so that it can be destructured in useContext
        }>
        {children}
        </DataContext.Provider>

    )
}

export default DataProvider;