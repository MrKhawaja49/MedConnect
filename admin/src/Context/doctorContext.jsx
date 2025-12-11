import { createContext } from "react";

export const doctorContext = createContext()

const doctorContextProvider = () => {

    const value = {
        
    }

    return (
        <doctorContext.Provider value={value}>
            {props.children}
        </doctorContext.Provider>
    )

}

export default doctorContextProvider