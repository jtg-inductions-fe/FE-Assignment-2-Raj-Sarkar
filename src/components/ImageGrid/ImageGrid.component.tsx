import {
    ImageList as MuiImageList,
    ImageListItem as MuiImageListItem,
} from '@mui/material';

import { ImageGridProps, SrcSet, SrcsetProps } from './ImageGrid.types';

/**
 *
 * @param itemData - list of image items data
 * @param isDesktop - boolean status whether it width is of desktop's or not
 * @returns Component to render the image items using
 */
export const ImageGrid = (props: ImageGridProps) => {
    const { itemData, isDesktop } = props;
    const data = isDesktop ? itemData : [itemData[2], itemData[3], itemData[1]];

    /**
     *
     * @param image - image to show
     * @param size - size of the row height
     * @param rows - number of rows the image is occupying
     * @param cols - number of columns the image is occupying
     * @returns - object with src and srcSet to use in image props
     */
    const srcset = (functionProps: SrcsetProps): SrcSet => {
        const { image, size, rows = 1, cols = 1 } = functionProps;
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
        };
    };

    return (
        <MuiImageList
            variant="quilted"
            cols={isDesktop ? 16 : 1}
            rowHeight={isDesktop ? 3.6 : 112}
            gap={45}
        >
            {data.map((item, index) => {
                const value = srcset({
                    image: item.src,
                    size: 121,
                    cols: isDesktop
                        ? item.desktopConfig.cols
                        : item.mobileConfig.cols,
                    rows: isDesktop
                        ? item.desktopConfig.rows
                        : item.mobileConfig.rows,
                });
                return (
                    <MuiImageListItem
                        key={index}
                        cols={
                            isDesktop
                                ? item.desktopConfig.cols
                                : item.mobileConfig.cols
                        }
                        rows={
                            isDesktop
                                ? item.desktopConfig.rows
                                : item.mobileConfig.rows
                        }
                    >
                        <img
                            src={value.src}
                            srcSet={value.srcSet}
                            alt={item.title}
                        />
                    </MuiImageListItem>
                );
            })}
        </MuiImageList>
    );
};
