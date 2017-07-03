import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import Paper from 'material-ui/Paper';
import { stateToHTML } from 'draft-js-export-html';
import createRichButtonsPlugin from 'draft-js-richbuttons-plugin';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin';
import createImagePlugin from 'draft-js-image-plugin';

const blockBreakoutPlugin = createBlockBreakoutPlugin();
const richButtonsPlugin = createRichButtonsPlugin();
const imagePlugin = createImagePlugin();

const style = {
  Paper: {
    padding: '1em',
    marginTop: '1em',
  },
};

const {
  // inline buttons
  ItalicButton, BoldButton, MonospaceButton, UnderlineButton,
  // block buttons
  ParagraphButton, H1Button, H2Button, ULButton, OLButton,
} = richButtonsPlugin;


class PostEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: this.initializeEditor(props.editorState),
      html: {},
    };
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.editorState !== null) {
      this.setState({ editorState: EditorState.createWithContent(convertFromRaw(nextProps.editorState)) });
      nextProps.editorChanged(convertToRaw(this.state.editorState.getCurrentContent()));
    }
  }
  onChange(editorState) {
    this.setState({ editorState });
    this.setState({ html: stateToHTML(this.state.editorState.getCurrentContent()) });
    this.props.editorChanged(convertToRaw(editorState.getCurrentContent()));
  }
  initializeEditor(state) {
    if (state === null) {
      return EditorState.createEmpty();
    }
    return EditorState.createWithContent(convertFromRaw(state));
  }
  render() {
    const { editorState } = this.state;

    return (
      <div>
        <h3>Content editor</h3>
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
        <Paper style={style.Paper}>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            spellCheck
            plugins={[blockBreakoutPlugin, richButtonsPlugin, imagePlugin]}
          />
        </Paper>
      </div>
    );
  }
}

PostEditor.propTypes = {
  editorChanged: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired,
};

export default PostEditor;
