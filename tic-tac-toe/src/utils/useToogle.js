import {useState, useCallback} from "react";

export const useToggle = (initialState) => {
    const [isToggled, setIsToggled] = useState(initialState);
  
    const toggle = useCallback(
      () => setIsToggled(state => !state),
      [setIsToggled],
    );
  
    return [isToggled, toggle];
  }