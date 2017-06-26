import React from 'react';
import {Editor, EditorState} from 'draft-js';

class PostEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = this.onChange.bind(this);
  }

  onChange(editorState) {
    this.setState({editorState});
    console.log(editorState.toJS());
  }
  render() {
    return <Editor editorState={this.state.editorState} onChange={this.onChange} />;
  }
}

export default PostEditor;

