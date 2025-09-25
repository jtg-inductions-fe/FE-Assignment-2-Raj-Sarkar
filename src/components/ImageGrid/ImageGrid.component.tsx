import { ImageListItem as MuiImageListItem } from '@mui/material';

import { StyledImageList } from './ImageGrid.styles';
import type { ImageGridProps } from './ImageGrid.types';

/**
 *
 * @param modifiedImageList - modified list of images for rendering image grid component
 * @param cols - number cols in the grid
 * @param rowHeight - height of each row in grid
 * @param gap - gap between two rows
 * @param marginTop - top margin of imagelist
 * @returns Component to render the image items using
 */
export const ImageGrid = (props: ImageGridProps) => {
    const { modifiedImageList, cols, rowHeight, gap, marginTop, ...rest } =
        props;

    return (
        <StyledImageList
            variant="quilted"
            cols={cols}
            rowHeight={rowHeight}
            gap={gap}
            {...rest}
            marginTop={marginTop}
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
        </StyledImageList>
    );
};
