/**
 * Contains types for a image item
 * @property img - image to render
 * @property title - title of image
 * @property desktopConfig - number of rows and cols the image will occupy in desktop
 * @property mobileConfig - number of rows and cols the image will occupy in mobile
 */
export type ImgItem = {
    img: string;
    title: string;
    desktopConfig: { rows: number; cols: number };
    mobileConfig: { rows: number; cols: number };
};

/**
 * Contains types for the return object of srcset helper function
 * @property src - source of image
 * @property srcSet - srcSet prop of image
 */
export type SrcSet = {
    src: string;
    srcSet: string;
};

/**
 * Contains types of all props of helper function
 * @property image - image to render
 * @property size - size of row height
 * @property rows - number of rows the image is occupying
 * @property cols - number of columns the image is occupying
 */
export type SrcsetProps = {
    image: string;
    size: number;
    rows: number;
    cols: number;
};

/**
 *
 * Contains types of props for Image Grid cmponent
 * @property itemData - list of image items
 * @property isDesktop - boolean status whether it width is of desktop's or not
 */
export type ImageGridProps = {
    itemData: ImgItem[];
    isDesktop: boolean;
};
