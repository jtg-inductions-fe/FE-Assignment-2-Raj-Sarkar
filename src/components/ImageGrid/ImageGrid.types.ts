/**
 * props for styled image list
 * @property marginTop - top margin of image list
 */
export type StyledImageListProps = {
    marginTop: number;
};

/**
 *
 * Contains types of props for Image Grid component
 * @property modifiedImageList - modified list of images for rendering image grid component
 * @property cols - number cols in the grid
 * @property rowHeight - height of each row in grid
 * @property gap - gap between two rows
 */
export type ImageGridProps = StyledImageListProps & {
    modifiedImageList: ModifiedImgItem[];
    cols: number;
    rowHeight: number;
    gap: number;
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
