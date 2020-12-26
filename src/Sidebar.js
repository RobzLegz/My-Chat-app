import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import {useStateValue} from "./StateProvider";

import './Sidebar.css';

function Sidebar(){
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => 
            setRooms(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

        return () => {
            unsubscribe();
        };
    }, [])


    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={user?.photoURL}/>
            </div>
            <div className="sidebar-chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;