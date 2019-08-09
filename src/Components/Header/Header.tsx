import * as React from 'react'
import {Component, FunctionComponent} from "react";
import {ButtonRoutes} from "./ButtonRoutes";
import './HeaderStyle.css'
import {Search} from "./Search";
import {LoginOrLogout} from "./LoginOrLogout";
import {Avatar} from "./Avatar";
import {DropdownAvatarSettings} from "./DropdownAvatarSettings";
import Popover from "react-tiny-popover";

export interface HeaderProps{

}
export interface StateProps {
    OpenDropdownAvatar:boolean,

}
export class Header<HeaderProps> extends Component{
    state:StateProps= {
        OpenDropdownAvatar: false

    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return(

            <div className="containerHeader">
                <ButtonRoutes/>

                <Search/>

                <Popover isOpen={this.state.OpenDropdownAvatar}
                         containerClassName={'popoverAvatarAndSettings'}
                         content={(
                             <DropdownAvatarSettings/>)}
                         >
                    <Avatar openPopover={()=>this.setState({OpenDropdownAvatar:!this.state.OpenDropdownAvatar})}/>
                </Popover>


            </div>

        )
    }
}




