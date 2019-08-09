import * as React from "react";
import {FunctionComponent} from "react";

export interface DropdownAvatarSettingsProps {

}

export const DropdownAvatarSettings:FunctionComponent<DropdownAvatarSettingsProps>=()=>{
    return(
        <div className="SettingsAccountDropdown">
            <div>Settings</div>
            <div>Support</div>
            <div>logout</div>
        </div>
    )
}