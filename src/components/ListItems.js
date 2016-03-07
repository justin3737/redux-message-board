import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class ListItems extends Component {
    constructor() {
        super();
    }
    _setListCSS = () => {
        const { user_id, curr_user } = this.props;
        let isMyMsg = (user_id === curr_user)? 'is-my-msg': '';
        return classNames('itemWrap', isMyMsg);
    }
    render() {
        const { id, user, message, time } = this.props;
        return (
            <li className={ this._setListCSS() }>
                <div className="item-tools">
                    <button className="button del">X</button>
                </div>
                <div className="item-id"># {id+1}
                    <span className="item-user-name">{user}</span> : 
                </div>
                <div className="item-msg">{message}</div>
                <div className="item-time">{time}</div>
            </li>
        );
    };
};

ListItems.propTypes = {
    id       : PropTypes.number.isRequired,
    user     : PropTypes.string.isRequired,
    user_id  : PropTypes.string.isRequired,
    time     : PropTypes.string.isRequired,
    message  : PropTypes.string.isRequired,
    curr_user: PropTypes.string.isRequired
};

export default ListItems;