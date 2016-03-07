import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button } from  'antd' ;
import { connect } from 'react-redux';
import { toggleModal, updateMsg } from '../actions';

class Header extends Component {
    constructor() {
        super();
    }
    _openModal = () => {
        const { updateMsg, toggleModal } = this.props;
        updateMsg(""); 
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
        toggleModal
    }, dispatch)
)(Header);
