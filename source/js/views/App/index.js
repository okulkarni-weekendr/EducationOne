import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Segment, Form, Grid } from 'semantic-ui-react';
import TextPlay from '../TextPlay/textPlay';

import Login from '../IndexPage/Login';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });


  render() {
    const { activeItem } = this.state;
    return (
      <BrowserRouter>
        <div>
          <div className='Page'>
            {/*<Button>*/}
              {/*Click Here*/}
            {/*</Button>*/}

            <Menu inverted fixed="top">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
              <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
            </Menu>

          </div>
          <Grid centered columns={2}>
            <Grid.Column>
              <TextPlay/>
            </Grid.Column>
          </Grid>
          </div>
      </BrowserRouter>
    );
  }
}
