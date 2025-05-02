export type Props = {
    activeTab: 'frequent' | 'recently';
    onTabChange: (tab: 'frequent' | 'recently') => void;
}