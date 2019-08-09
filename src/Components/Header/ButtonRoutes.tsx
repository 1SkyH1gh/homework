import * as React from 'react'
import {FunctionComponent} from "react";


export interface ButtonRoutesProps {

}

export const ButtonRoutes:FunctionComponent<ButtonRoutesProps>=()=>{
    return(
        <div className="buttonGroup">
            <div className="buttonHeader">Account</div>
            <div className="buttonHeader">Music</div>
            <div className="buttonHeader">Videos</div>
            <div className="buttonHeader">FriendList</div>
        </div>
    )
}