import React from 'react';
import Editor from 'draft-js-plugins-editor';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';
import { stateToHTML } from 'draft-js-export-html';
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin';
import { EditorState, ContentState } from 'draft-js';

import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin';

import HtmlParser2 from './HtmlParser2';

const blockBreakoutPlugin = createBlockBreakoutPlugin();

const richButtonsPlugin = createRichButtonsPlugin();

const {
  // inline buttons
  ItalicButton, BoldButton, MonospaceButton, UnderlineButton,
  // block buttons
  ParagraphButton, H1Button, H2Button, ULButton, OLButton,
} = richButtonsPlugin;


class PostEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      editorState: this.getPlaceholder(),
      html: {},
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
    this.setState({ html: stateToHTML(this.state.editorState.getCurrentContent()) });
  }

  getPlaceholder() {
    const placeholder = '';
    const contentHTML = DraftPasteProcessor.processHTML(placeholder);
    const state = ContentState.createFromBlockArray(contentHTML);
    return EditorState.createWithContent(state);
  }
  render() {
    const { editorState } = this.state;

    return (
      <div>
        <div style={{ marginBottom: 0 }}>
          <BoldButton />
          <ItalicButton />
          <UnderlineButton />
          <MonospaceButton />
          <b> | &nbsp; </b>
          <ParagraphButton />
          <H1Button />
          <H2Button />
          <ULButton />
          <OLButton />
        </div>
        <div>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            spellCheck={false}
            plugins={[blockBreakoutPlugin, richButtonsPlugin]}
          />
        </div>
        <h1>read only</h1>
        <HtmlParser2 html={this.state.html} />
      </div>
    );
  }
}

export default PostEditor;
