import {
    ImageList as MuiImageList,
    ImageListItem as MuiImageListItem,
} from '@mui/material';

import type { ImageGridProps, ModifiedImgItem } from './ImageGrid.types';

/**
 *
 * @param itemData - list of image items data
 * @param isDesktop - boolean status whether it width is of desktop's or not
 * @returns Component to render the image items using
 */
export const ImageGrid = (props: ImageGridProps) => {
    const { itemData, isDesktop } = props;
    const data = isDesktop ? itemData : [itemData[2], itemData[3], itemData[1]];

    const newData: ModifiedImgItem[] = data.map((item) => ({
        title: item.title,
        src: item.src,
        config: isDesktop ? item.desktopConfig : item.mobileConfig,
    }));

    return (
        <MuiImageList
            variant="quilted"
            cols={isDesktop ? 16 : 1}
            rowHeight={isDesktop ? 3.6 : 112}
            gap={45}
        >
            {newData.map((item, index) => (
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
