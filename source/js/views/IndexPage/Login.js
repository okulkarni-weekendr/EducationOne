import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'

class Login extends Component {
  render() {
    return (
        <Segment ui grid page compact center aligned>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        </Segment>
    );
  }
}

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
