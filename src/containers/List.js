import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItems from '../components/ListItems';

class List extends Component {
    constructor() {
        super();
    }
    render() {
        const { lists, modals } = this.props;
        return (
            <div className="container">
                <div className="listWrap">
                    <ul className="list-ul">
                        {
                            lists.map(info =>
                                <ListItems 
                                    key={info.id}
                                    {...info}
                                    curr_user={modals.user_id}
                                />
                            )
                        }
                     </ul>
                </div>
            </div>
        );
    };
};


List.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        id     : PropTypes.number.isRequired,
        user   : PropTypes.string.isRequired,
        user_id: PropTypes.string.isRequired,
        time   : PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default connect(
    state => ({
        lists : state.lists,
        modals: state.modals
    }),{}
)(List);