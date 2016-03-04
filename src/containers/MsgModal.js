import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateMsg, updateUser, toggleModal, addList } from '../actions';
import { Modal, Form, Input } from 'antd';

class MsgModal extends Component {
    constructor() {
        super();
    }
    _onChange = (e) => {
        const { updateUser, updateMsg } = this.props;
        return {
            user : (e) => {
                updateUser(e.target.value);
            },
            message: (e) => {
                updateMsg(e.target.value);
            }
        };
    }
    _handleOk = () => {
        const { user, message, addList, toggleModal } = this.props;
        addList(message, user);
        toggleModal(false);
    }
    _handleCancel = () => {
        this.props.toggleModal(false);
        this.props.updateMsg("");
    }
    render() {
        const FormItem = Form.Item;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const { visible, user, message } = this.props;
        return (
            <div>
                <Modal 
                    title="請輸入留言訊息" 
                    visible={visible}
                    onOk={this._handleOk} 
                    onCancel={this._handleCancel} >
                        <Form horizontal>
                            <FormItem
                                {...formItemLayout}
                                label="使用者名稱：">
                                <Input 
                                    placeholder="User Name" 
                                    value={user} 
                                    onChange={this._onChange().user}/>
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="留言內容：">
                                <Input 
                                    type="textarea" 
                                    placeholder="Message" 
                                    value={message} 
                                    onChange={this._onChange().message} />
                            </FormItem>
                        </Form>
                </Modal>
            </div>
        );
    };
};

export default connect(
    state => ({
        visible: state.modals.visible,
        message: state.modals.message,
        user   : state.modals.user
    }),
    dispatch => bindActionCreators({
        updateMsg,
        updateUser,
        toggleModal,
        addList
    }, dispatch)
)(MsgModal);
