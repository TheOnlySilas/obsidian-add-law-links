import {Notice} from 'obsidian';
import {
    ViewUpdate,
    PluginValue,
    EditorView,
    ViewPlugin,
  } from "@codemirror/view";
  
  class Viewer implements PluginValue {
    constructor(view: EditorView) {
      // ...
    }
  
    update(update: ViewUpdate) {
      console.log(update);
    }
  
    destroy() {
      // ...
    }
  }
  
  export const viewer = ViewPlugin.fromClass(Viewer);