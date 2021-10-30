export interface SelectorProps {
  selected: number;
  items: string[];
  onSelect: (i: number) => void;
  disabled?: boolean;
}
export interface SelectorItemProps {
  selected: boolean;
  disabled?: boolean;
}
