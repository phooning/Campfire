export type ErrorCallback = ((error: Error) => void);
export type OpenCallback = (() => void);

export type CallbackMap = {
  error: ErrorCallback[];
  open: OpenCallback[];
}

export enum ConnectionState {
  Connecting = 1,
  Connected = 2,
  Closed = 3,
}
