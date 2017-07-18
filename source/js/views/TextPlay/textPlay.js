import React from 'react';
import PropTypes from 'prop-types';
import {Editor, EditorState, DefaultDraftBlockRenderMap, RichUtils} from 'draft-js';
import {Segment, Button} from 'semantic-ui-react';
import { Map } from 'immutable';

class textPlay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onChange = this.onChange.bind(this);
  }

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

    if(newState){
      this.onChange(newState);
      return 'handled';
    }

    return 'non-handled';

  };

  onChange(editorState){
    this.setState({
      editorState: editorState
    });
  }

  onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  };

  onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  };


  render(){
    return  (
      <div>
      <Segment>
        <Editor
          handleKeyCommand={this.handleKeyCommand}
          editorState={this.state.editorState}
          onChange={(editorState) => {this.onChange(editorState)}} />
      </Segment>
        <Button.Group>
          <Button icon='bold' onClick={this.onBoldClick} />
          <Button icon='underline' onClick={this.onUnderlineClick} />
          <Button icon='italic' onClick={this.onItalicClick}/>
        </Button.Group>
      </div>
    );
  }
}

export default textPlay;

