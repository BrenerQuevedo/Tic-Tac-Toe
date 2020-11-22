import {useEffect, useState, useRef} from "react";

export const useFetch = url => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
        return () => {
            isCurrent.current = false;
        }
    }, []);

    useEffect(() => {
        setState(state => ({data: state.data, loading: true}));
        fetch(url)
            .then(res => res.text())
            .then(r => {
                if (isCurrent.current) {
                    setState({data: r, loading: false })
                }
            })
    }, [url, setState])

    return state;
}