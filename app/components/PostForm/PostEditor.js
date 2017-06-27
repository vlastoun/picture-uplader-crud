import React from 'react';

import Draft from 'draft-js';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';
const { EditorState, ContentState } = Draft;
import Editor from 'draft-js-plugins-editor';

import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin';
const blockBreakoutPlugin = createBlockBreakoutPlugin();

import createRichButtonsPlugin from 'draft-js-richbuttons-plugin';
const richButtonsPlugin = createRichButtonsPlugin();

const {
  // inline buttons
  ItalicButton, BoldButton, MonospaceButton, UnderlineButton,
  // block buttons
  ParagraphButton, H1Button, H2Button, ULButton, OLButton
} = richButtonsPlugin;


class PostEditor extends React.Component {

  state = {
    editorState: this._getPlaceholder()
  }

  _getPlaceholder() {
    const placeholder = '<p>Add <b>rich</b> controls to your editor with minimal hassle.</p>';
    const contentHTML = DraftPasteProcessor.processHTML(placeholder);
    const state = ContentState.createFromBlockArray(contentHTML);
    return Draft.EditorState.createWithContent(state);
  }

  _onChange(editorState) {
    this.setState({editorState});
  }

  render() {
    let { editorState } = this.state;

    return (
      <div>
        <div style={{ marginBottom:0 }}>
          <BoldButton/>
          <ItalicButton/>
          <UnderlineButton/>
          <MonospaceButton/>
          <b> | &nbsp; </b>
          <ParagraphButton/>
          <H2Button/>
          <ULButton/>
          <OLButton/>
        </div>
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