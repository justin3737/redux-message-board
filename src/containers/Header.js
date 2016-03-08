import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button } from  'antd' ;
import { connect } from 'react-redux';
import { toggleModal, updateMsg } from '../actions';    /* 把要用的actions import進來 */

class Header extends Component {
    constructor() {
        super();
    }
    _openModal = () => {
        const { updateMsg, toggleModal } = this.props;
        /* 開啟 modal 以前會先清空留言內容框 */
        updateMsg(""); 
        /* 把 modal 開啟 */
        toggleModal(true); 
    }
    render() {
        return (
            <header className="header">
                <div className="h1">MessageBoard</div>
                <Button type="primary" className="openModalBtn" onClick={this._openModal}>留言</Button>
            </header>
        )
    };
};

export default connect(
    state => ({
        visible: state.modals.visible
    }),
    dispatch => bindActionCreators({
        updateMsg,
        toggleModal     /* 加入 toggleModal 的  actions  */
    }, dispatch)
)(Header);
