import * as React from 'react'
import {FunctionComponent} from "react";


export interface SearchProps {

}

export const Search:FunctionComponent<SearchProps>=()=>{
    return(
        <form className="SearchForm">
            <input className="InputSearch" placeholder='Search...'/>
        </form>
    )
}