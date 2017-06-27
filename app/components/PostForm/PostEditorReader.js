import React from 'react';

import Draft from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';
import { stateToHTML } from 'draft-js-export-html';
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin';

import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin';
const blockBreakoutPlugin = createBlockBreakoutPlugin();

const richButtonsPlugin = createRichButtonsPlugin();

const { EditorState, ContentState } = Draft;
const {
  // inline buttons
  ItalicButton, BoldButton, MonospaceButton, UnderlineButton,
  // block buttons
  ParagraphButton, H1Button, H2Button, ULButton, OLButton
} = richButtonsPlugin;


class PostEditor extends React.Component {

  state = {
    editorState: this._getPlaceholder(),
    html: {},
  }

  _getPlaceholder() {
    const placeholder = '';
    const contentHTML = DraftPasteProcessor.processHTML(placeholder);
    const state = ContentState.createFromBlockArray(contentHTML);
    return Draft.EditorState.createWithContent(state);
  }

  _onChange(editorState) {
    this.setState({ editorState });
    this.setState({ html: stateToHTML(this.state.editorState.getCurrentContent()) });
  }

  componentWillReceiveProps(props) {
    const contentHTML = DraftPasteProcessor.processHTML(props);
    const state = ContentState.createFromBlockArray(contentHTML);
    console.log(state);
  }

  render() {
    let { editorState } = this.state;

    return (
      <div>
        <div>
          <Editor
            editorState={editorState}
            onChange={this._onChange.bind(this)}
            spellCheck={false}
            plugins={[blockBreakoutPlugin, richButtonsPlugin]}
          />
        </div>
      </div>
    );
  }
}

export default PostEditor;
