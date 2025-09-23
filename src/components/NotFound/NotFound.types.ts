/**
 * Types for notfound component
 * @property image - image src string to render
 * @property imageAlt - alt text for the image
 * @property heading - heading text for the page
 * @property description - description for the page
 * @property buttonContent - text content inside the button
 * @property href - path to be re-directed upon clicking the button
 * @property isDesktop - boolean value for view width is desktop or not
 */
export type NotFoundProps = {
    image: string;
    imageAlt: string;
    heading: string;
    description: string;
    buttonContent: string;
    buttonHref: string;
    isDesktop: boolean;
};
