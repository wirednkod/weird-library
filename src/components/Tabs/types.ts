export interface TabProps {
  active: boolean;
}
export interface TabsProps {
  onTabChange: (i?: number) => void;
  activeTab: number | undefined;
  tabs: string[];
  theme?: any;
}
