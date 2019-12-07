import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default class Container extends Component<{}, State> {
    render (){
        return{
            <Provider></Provider>
        }
    };
}
