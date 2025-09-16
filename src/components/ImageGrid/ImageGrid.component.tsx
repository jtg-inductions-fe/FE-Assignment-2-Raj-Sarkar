import {
    ImageList as MuiImageList,
    ImageListItem as MuiImageListItem,
    useMediaQuery,
} from '@mui/material';

import { itemData } from '@constant';
import { srcset } from '@helper';
import { theme } from '@theme';

/**
 *
 * @returns Component to render the image items using
 */
export const ImageGrid = () => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const data = isDesktop ? itemData : [itemData[2], itemData[3], itemData[1]];

    return (
        <MuiImageList
            variant="quilted"
            cols={isDesktop ? 16 : 1}
            rowHeight={isDesktop ? 220 : 112}
            gap={45}
        >
            {data.map((item, index) => {
                const value = srcset({
                    image: item.img,
                    size: 121,
                    rows: isDesktop ? item.desktop.cols : item.mobile.cols,
                    cols: isDesktop ? item.desktop.rows : item.mobile.rows,
                });
                return (
                    <MuiImageListItem
                        key={index}
                        cols={isDesktop ? item.desktop.cols : item.mobile.cols}
                        rows={isDesktop ? item.desktop.rows : item.mobile.rows}
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
