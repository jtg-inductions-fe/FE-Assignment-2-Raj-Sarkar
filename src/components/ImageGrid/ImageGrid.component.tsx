import {
    ImageList as MuiImageList,
    ImageListItem as MuiImageListItem,
} from '@mui/material';

import { srcset } from '@helper';

import { ImageGridProps } from './ImageGrid.types';

/**
 *
 * @param itemData - list of image items data
 * @param isDesktop - boolean status whether it width is of desktop's or not
 * @returns Component to render the image items using
 */
export const ImageGrid = (props: ImageGridProps) => {
    const { itemData, isDesktop } = props;
    const data = isDesktop ? itemData : [itemData[2], itemData[3], itemData[1]];

    return (
        <MuiImageList
            variant="quilted"
            cols={isDesktop ? 16 : 1}
            rowHeight={isDesktop ? 3.6 : 112}
            gap={45}
        >
            {data.map((item, index) => {
                const value = srcset({
                    image: item.img,
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
