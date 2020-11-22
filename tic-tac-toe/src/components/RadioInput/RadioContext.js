import React, { createContext } from "react"
import useRadioButtons from "./useRadioButtons";


const RadioGroupContext = createContext();

function RadioContext({ children, name, onChange }) {
    const [state, inputProps] = useRadioButtons(name);
    return (
        <RadioGroupContext.Provider value={inputProps}>
            {children}
        </RadioGroupContext.Provider>
    );
}

export default RadioContext;