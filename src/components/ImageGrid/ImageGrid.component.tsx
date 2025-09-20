import {
    ImageList as MuiImageList,
    ImageListItem as MuiImageListItem,
} from '@mui/material';

import type { ImageGridProps } from './ImageGrid.types';

/**
 *
 * @param modifiedImageList - modified list of images for rendering image grid component
 * @param cols - number cols in the grid
 * @param rowHeight - height of each row in grid
 * @param gap - gap between two rows
 * @returns Component to render the image items using
 */
export const ImageGrid = (props: ImageGridProps) => {
    const { modifiedImageList, cols, rowHeight, gap } = props;

    return (
        <MuiImageList
            variant="quilted"
            cols={cols}
            rowHeight={rowHeight}
            gap={gap}
        >
            {modifiedImageList.map((item, index) => (
                <MuiImageListItem
                    key={index}
                    cols={item.config.cols}
                    rows={item.config.rows}
                >
                    <img src={item.src} alt={item.title} />
                </MuiImageListItem>
            ))}
        </MuiImageList>
    );
};
