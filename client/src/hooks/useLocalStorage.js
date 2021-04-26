import {useState, useEffect} from 'react';

const PREFIX = 'whatsapp-clone-';

function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;
    console.log(prefixedKey);
    const [value, setValue] = useState(function () {
        console.log(prefixedKey);
        const jsonValue = localStorage.getItem(prefixedKey);
       
        try {
            return JSON.parse(jsonValue);
        } catch (e) {
            console.log("empty json");
        }
        // if (jsonValue != null && jsonValue !== undefined) {
        //     return JSON.parse(jsonValue);
        // }
        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    })

    useEffect(function () {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value])
    return [value, setValue]
}

export default useLocalStorage




// import { useEffect, useState } from 'react'

// const PREFIX = 'whatsapp-clone-'

// export default function useLocalStorage(key, initialValue) {
//   const prefixedKey = PREFIX + key
//   const [value, setValue] = useState(() => {
//     const jsonValue = localStorage.getItem(prefixedKey)
//     if (jsonValue != null) return JSON.parse(jsonValue)
//     if (typeof initialValue === 'function') {
//       return initialValue()
//     } else {
//       return initialValue
//     }
//   })

//   useEffect(() => {
//     localStorage.setItem(prefixedKey, JSON.stringify(value))
//   }, [prefixedKey, value])

//   return [value, setValue]
// }