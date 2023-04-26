export interface ReactKeyboardEvent
  extends React.KeyboardEvent<HTMLInputElement> {
  target: HTMLInputElement
}

export interface ReactChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement
}
