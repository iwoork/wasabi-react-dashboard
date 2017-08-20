import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { RaisedButton } from 'material-ui';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <RaisedButton label="Default"/>
                <RaisedButton label="Primary" primary />
                <RaisedButton label="Secondary" secondary />
            </div>
        );
    }
}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { app } = state;
    return {
        app
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
