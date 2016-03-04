import React, { Component } from 'react';
import ListItems from '../components/ListItems';

export default class List extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <div className="listWrap">
                    <ListItems />
                </div>
            </div>
        );
    };
};
