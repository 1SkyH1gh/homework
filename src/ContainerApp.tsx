import * as React from 'react'
import {Component} from "react";
import {Header} from "./Components/Header/Header";
import {Carouselbody} from "./Components/Carousel/Carouselbody";

export interface ContainerAppProps {

}

export class ContainerApp<ContainerAppProps> extends Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
            <Header/>
            <Carouselbody/>
            </div>
        )
    }
}