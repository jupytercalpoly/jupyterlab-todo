// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import {
  ICommandPalette,
  MainAreaWidget,
  ReactWidget
} from '@jupyterlab/apputils';
import * as Icons from '@jupyterlab/ui-components';
import {
  ABCWidgetFactory,
  DocumentRegistry,
  DocumentWidget,
  IDocumentWidget
} from '@jupyterlab/docregistry';
import { Widget } from '@lumino/widgets';
import React from 'react';
import { TodoCenter } from './TodoCenter';


/**
 * Initialization data for the jupyterlab-todo extension.
 */
 const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-todo:plugin',
  autoStart: true,
  requires: [ICommandPalette],
  activate: async (app: JupyterFrontEnd, palette: ICommandPalette) => {
    const content: Widget = new MyWidget();
    const widget = new MainAreaWidget({ content });
    widget.id = 'todo-jupyterlab';
    widget.title.closable = true;
    widget.title.icon = Icons.jupyterFaviconIcon;
    app.shell.add(widget, 'right', { rank: 500 });

    const ft: DocumentRegistry.IFileType = {
      name: 'todo',
      contentType: 'file',
      fileFormat: 'text',
      displayName: 'To Do File',
      extensions: ['.todo'],
      mimeTypes: ['text/plain']
    };
    app.docRegistry.addFileType(ft);

    const factory = new TodoWidgetFactory({
      name: 'TODOCENTER',
      fileTypes: ['todo'],
      defaultFor: ['todo'],
      readOnly: true
    });
    app.docRegistry.addWidgetFactory(factory);
  }
}

/**
 * A todo widget.
 */
class TodoWidget extends Widget {
  constructor(context: DocumentRegistry.Context) {
    super();
    this.context = context;
    void context.ready.then(() => {
      console.log('context is read');
    });
  }

  /**
   * The todo widget's context.
   */
   readonly context: DocumentRegistry.Context;
}

/**
 * A widget factory for todo files.
 */
class TodoWidgetFactory extends ABCWidgetFactory<
 IDocumentWidget<TodoWidget>
> {
 /**
  * Create a new widget given a context.
  */
 protected createNewWidget(
   context: DocumentRegistry.IContext<DocumentRegistry.IModel>
 ): IDocumentWidget<TodoWidget> {
   console.log('context', context);
   const content = new TodoWidget(context);
   const widget = new DocumentWidget({ content, context });
   return widget;
 }
}

class MyWidget extends ReactWidget {
  render() {
    return (
      <div>
        <TodoCenter />
      </div>
    )
  }
}

export default plugin;
