import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

export function useContacts() {
    return userContext(ContactsContext)
}

export function ContactContext({ children }) {
    const [contacts, setContacts] = useLocalStorage('contacts', [])
    function createContact(id, name) {
        setContacts(function (prevContacts) {
            return [...prevContacts, {id, name}]
        })
    }
    return (
        <ContactsContext.Provider value={{contacts, createContext}}>
            {children}
        </ContactsContext.Provider>
    )
}
