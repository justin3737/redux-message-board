import './root.scss';
import React, { Component } from 'react';
import Header   from './Header';
import List     from './List';
import MsgModal from './MsgModal';

export default class Root extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header />
                <List />
                <MsgModal />
            </div>
        );
    };
};
