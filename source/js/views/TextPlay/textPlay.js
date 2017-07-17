import React from 'react';
import PropTypes from 'prop-types';
import {Editor, EditorState} from 'draft-js';
import {Form, TextArea} from 'semantic-ui-react';

class textPlay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState){
    this.setState({
      editorState: editorState
    });
  }

  render(){
    return  (
      <Editor
        placeHolder="Start writing something"
        editorState={this.state.editorState}
        onChange={(editorState) => {this.onChange(editorState)}} />
    );
  }
}

export default textPlay;

