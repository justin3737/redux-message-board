import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import ListItems from '../components/ListItems';
import { delList } from '../actions';

class List extends Component {
    constructor() {
        super();
    }
    _onDel = (id) => {
        const confirm = Modal.confirm;
        const { delList } = this.props;
        confirm({
            title: '您是否確認要刪除留言?' ,
            onOk() {
                delList(id);
            },
            onCancel() {}
        });
    }
    render() {
        const { lists, modals } = this.props;
        return (
            <div className="container">
                <div className="listWrap">
                    <ul className="list-ul">
                        {
                            Object.keys(lists).map(key => {
                                return (
                                    <ListItems 
                                        key={key}
                                        {...lists[key]}
                                        curr_user={modals.user_id}
                                        onDel={this._onDel}
                                />)
                            })
                        }
                     </ul>
                </div>
            </div>
        );
    };
};

export default connect(
    state => ({
        lists : state.lists,
        modals: state.modals
    }),
    dispatch => bindActionCreators({
        delList
    }, dispatch)
)(List);
