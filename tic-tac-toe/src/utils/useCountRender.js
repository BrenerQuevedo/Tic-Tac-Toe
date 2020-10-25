import {useRef} from "react";

export const useCountRender = () => {
    const render = useRef(0);
    console.log("Renderizações: " + ++render.current)
}