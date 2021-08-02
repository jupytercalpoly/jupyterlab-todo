// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import React from 'react';
import { Widget } from '@lumino/widgets';
import { ReactWidget } from '@jupyterlab/apputils';
import * as Icons from '@jupyterlab/ui-components';
import { TodoCenter } from './TodoCenter';
import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';


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
