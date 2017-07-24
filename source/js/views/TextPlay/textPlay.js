import React from 'react';
import PropTypes from 'prop-types';
import {EditorState, DefaultDraftBlockRenderMap, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import {Segment, Button} from 'semantic-ui-react';
import { Map } from 'immutable';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';

//custom plugin
import createHighlightPlugin from '../../editorPlugins/highlightPlugin';

import createAutoListPlugin from 'draft-js-autolist-plugin';
const autoListPlugin = createAutoListPlugin();

//Create a new Instance of Plugins:
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;
const highLightPlugin = createHighlightPlugin();

class textPlay extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        editorState: EditorState.createEmpty()
      };

      const initialContent = window.localStorage.getItem('content');
      if(initialContent){
        this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(initialContent)));
      }else {
        this.state.editorState = EditorState.createEmpty();
      }

      this.saveContent = this.saveContent.bind(this);
      this.onChange = this.onChange.bind(this);
  }

  saveContent = (content) => {
      window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  };

  onChange = (editorState) => {
      const contentState = editorState.getCurrentContent();
      if(contentState.hasText()){
        console.log('content State', convertToRaw(contentState));
      }
      this.saveContent(contentState);
      this.setState({
        editorState
      })
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if(newState){
      this.onChange(newState);
      return 'handled';
    }
    return 'non-handled';
  };

  render(){
    return  (
      <div>
      <Segment>
        <Editor
          handleKeyCommand={this.handleKeyCommand}
          editorState={this.state.editorState}
          onChange={(editorState) => {this.onChange(editorState)}}
          plugins={[emojiPlugin, highLightPlugin, autoListPlugin]}/>
          <EmojiSuggestions/>
      </Segment>
      </div>
    );
  }
}

export default textPlay;

