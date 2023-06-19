import React from "react";
import { Alert } from '@mui/material'
import { useState, useEffect } from "react";

const Notification = () => {
    const [visible,setVisible] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
          setVisible(false);
        }, 2500);    
        return () => clearTimeout(timeout);
    }, []);
    if(visible)
    {
        return ( 
            <div>
                <Alert>Favorite Added</Alert>
            </div>
        );
    } else {
        return null;
    }
}
 
export default Notification;