import React from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';

class HtmlPraser2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  componentWillReceiveProps(props) {
    const contentHTML = DraftPasteProcessor.processHTML(props.html);
    const state = ContentState.createFromBlockArray(contentHTML);
    this.setState({ editorState: EditorState.createWithContent(state) });
  }


  render() {
    return <Editor editorState={this.state.editorState} readOnly />;
  }
}

export default HtmlPraser2;
