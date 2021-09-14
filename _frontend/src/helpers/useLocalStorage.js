import {useEffect, useState} from "react";

const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(()=> {
        let value = window.localStorage.getItem(key) || defaultValue;
        return value;
    })
    useEffect(()=> {
        window.localStorage.setItem(key, state);
    }, [state, key]);
    return [state, setState];
}

export default useLocalStorage;