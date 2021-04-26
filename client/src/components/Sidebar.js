import { Nav, Tab } from 'react-bootstrap'
import React from 'react'

const CONVERSATIONS_KEY = "conversation";
const CONTACTS_KEY = "contacts";

function Sidebar({id}) {
    return (
        <div style={{width: '250px'}} className="d-flex flex-column">
            <Tab.Container variant="tabs" className="justify-content-center">
                <Nav>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>
                            Conversations 
                        </Nav.Link>
                        
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </Tab.Container>
        </div>
    )
}

export default Sidebar
