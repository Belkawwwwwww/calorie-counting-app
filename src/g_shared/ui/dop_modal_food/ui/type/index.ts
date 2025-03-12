export type Props = {
    title: string;
    value: string;
    data: string;
    handleTabChange: (tab: string) => void;
    activeTab: string;
    handleCloseAdditionalModal: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
