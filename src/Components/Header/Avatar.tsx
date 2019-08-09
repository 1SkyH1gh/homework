import * as React from "react";
import {FunctionComponent} from "react";
import testAva from './TestAvatar.jpg'
export interface AvatarProps {
openPopover:()=>void
}


export const Avatar:FunctionComponent<AvatarProps>=(props)=>{
    return(

            <img src={testAva} className="AvatarMini" onClick={props.openPopover}/>

    )
}