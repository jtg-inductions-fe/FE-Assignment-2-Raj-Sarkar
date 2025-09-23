/**
 * Contains types for menu icon data
 * @property id - id of item
 * @property label - title of item
 * @property icon - icon to render
 * @property to - path to re-direct
 */
export type MenuIcon = {
    id: string;
    label: string;
    icon: React.ElementType;
    to: string;
};
