import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './common/Navbar';
import * as ReactBootstrap from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <HeaderMenu />
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;
