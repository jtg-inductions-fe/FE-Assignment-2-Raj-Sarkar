import { SrcSet, SrcsetProps } from '@components/ImageGrid/ImageGrid.types';

/**
 *
 * @param image - image to show
 * @param size - size of the row height
 * @param rows - number of rows the image is occupying
 * @param cols - number of columns the image is occupying
 * @returns - object with src and srcSet to use in image props
 */
export const srcset = (props: SrcsetProps): SrcSet => {
    const { image, size, rows = 1, cols = 1 } = props;
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
};
