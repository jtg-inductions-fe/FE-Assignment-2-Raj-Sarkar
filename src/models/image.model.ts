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
