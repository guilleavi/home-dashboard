export type ReactKeyboardEvent = React.KeyboardEvent<HTMLInputElement> & {
  target: HTMLInputElement
}

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement> & {
  target: HTMLInputElement
}

export type ReactMouseEvent = React.MouseEvent<HTMLElement>
