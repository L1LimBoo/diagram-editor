import { Plugin } from '@/interfaces';
import { topMenuPlugin } from './topMenu';
import { historyPlugin } from './history';
import { actionsPlugin } from './actions';
import { contextMenuPlugin } from '@/plugins/contextMenu';

export * from './actions';
export * from './history';

export const builtInPlugin: Plugin = editor => {
  topMenuPlugin(editor);
  historyPlugin(editor);
  actionsPlugin(editor);

  contextMenuPlugin(editor);
};
