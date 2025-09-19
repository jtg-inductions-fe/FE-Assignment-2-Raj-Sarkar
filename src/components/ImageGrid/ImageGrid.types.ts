/**
 * Contains types for a image item
 * @property src - image to render
 * @property title - title of image
 * @property desktopConfig - number of rows and cols the image will occupy in desktop
 * @property mobileConfig - number of rows and cols the image will occupy in mobile
 */
export type ImgItem = {
    src: string;
    title: string;
    desktopConfig: { rows: number; cols: number };
    mobileConfig: { rows: number; cols: number };
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

/**
 * Type for modified mapped image data
 * @property src - source of image
 * @property title - title of image
 * @property config - holds the number of rows & columns the image will take to render
 */
export type ModifiedImgItem = {
    src: string;
    title: string;
    config: { rows: number; cols: number };
};
