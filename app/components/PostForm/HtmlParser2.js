import React from 'react';
import { Editor, EditorState, ContentState, convertFromHTML } from 'draft-js';

class HtmlPraser2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  componentWillReceiveProps(props) {
    const contentHTML = convertFromHTML(props.html);
    const state = ContentState.createFromBlockArray(contentHTML);
    this.setState({ editorState: EditorState.createWithContent(state) });
  }


  render() {
    return <Editor editorState={this.state.editorState} readOnly />;
  }
}

export default HtmlPraser2;
