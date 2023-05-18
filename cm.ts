import {
    ViewUpdate,
    PluginValue,
    EditorView,
    ViewPlugin,
  } from "@codemirror/view";
import {
    EditorState
} from "@codemirror/state";

var Updater = new EditorView({
    state: EditorState.create({
      doc: initial_text,
      extensions: [ 
        CodeMirrorSetup, 
        EditorView.updateListener.of((v:ViewUpdate) => {
          if (v.docChanged) {
            
          }
      }) ]
    }),
    parent: this.element
  });
