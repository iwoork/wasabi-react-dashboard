import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions';

class App extends React.Component {
    render() {
        const { app, actions } = this.props;
        return (
            <div className="wrapper">
                <AppBar
                    title="Wasabi Admin UI"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={() => {actions.toggleDrawer(app.drawer);}}
                />
                <Drawer
                    open={app.drawer}
                    docked={false}
                    onRequestChange={() => {actions.toggleDrawer(app.drawer);}}
                >
                    <MenuItem onTouchTap={() => {}}>Experiments</MenuItem>
                    <MenuItem onTouchTap={() => {}}>Priority</MenuItem>
                    <MenuItem onTouchTap={() => {}}>Users</MenuItem>
                    <MenuItem onTouchTap={() => {}}>Applications</MenuItem>
                    <MenuItem onTouchTap={() => {}}>Plugins</MenuItem>
                    <MenuItem onTouchTap={() => {}}>Tools</MenuItem>
                </Drawer>
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    app: PropTypes.object.isRequired,
    actions: PropTypes.object,
    children: PropTypes.element
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
)(App);
