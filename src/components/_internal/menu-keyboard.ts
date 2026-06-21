export interface MenuContentController {
  focusNext(): void;
  focusPrevious(): void;
  focusFirst(): void;
  focusLast(): void;
  activateFocused(): void;
}

export function handleMenuKeyDown(
  event: KeyboardEvent,
  content: MenuContentController | null,
  onClose: () => void,
): void {
  switch (event.key) {
    case 'Escape':
      event.preventDefault();
      onClose();
      break;
    case 'ArrowDown':
      event.preventDefault();
      content?.focusNext();
      break;
    case 'ArrowUp':
      event.preventDefault();
      content?.focusPrevious();
      break;
    case 'Home':
      event.preventDefault();
      content?.focusFirst();
      break;
    case 'End':
      event.preventDefault();
      content?.focusLast();
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      content?.activateFocused();
      break;
  }
}
