import { ColDef, ColGroupDef } from "ag-grid-community";
import { Message } from "../../messages";

export type MessagesStoreType = {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
  removeMessage: (message: Message) => void;
  updateMessage: (message: Message) => void;
  updateMessagePartial: (message: Partial<Message>) => void;
  clearMessages: () => void;
  removeMessages: (ids: string[]) => void;
  columns: Array<ColDef | ColGroupDef>;
  setColumns: (columns: Array<ColDef | ColGroupDef>) => void;
  deleteSession: (id: string) => void;
};
