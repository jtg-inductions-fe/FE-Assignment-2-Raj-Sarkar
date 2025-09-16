/**
 * Contains types for a image item
 * @param img - image to render
 * @param title - title of image
 * @param desktop - number of rows and cols the image will occupy in desktop
 * @param mobile - number of rows and cols the image will occupy in mobile
 */
export type ImgItem = {
    img: string;
    title: string;
    desktop: { rows: number; cols: number };
    mobile: { rows: number; cols: number };
};

/**
 * Contains types for the return object of srcset helper function
 * @param src - source of image
 * @param srcSet - srcSet prop of image
 */
export type SrcSet = {
    src: string;
    srcSet: string;
};

/**
 * Contains types of all props of helper function
 * @param image - image to render
 * @param size - size of row height
 * @param rows - number of rows the image is occupying
 * @param cols - number of columns the image is occupying
 */
export type SrcsetProps = {
    image: string;
    size: number;
    rows: number;
    cols: number;
};
