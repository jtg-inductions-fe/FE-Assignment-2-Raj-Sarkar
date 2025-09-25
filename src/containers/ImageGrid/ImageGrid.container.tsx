import { ImageGrid as ImageGridComponent } from '@components/ImageGrid';

import type { ImageGridProps, ModifiedImgItem } from './ImageGrid.types';

/**
 *
 * @property isDesktop - boolean value of view width is desktop or not
 * @property imageList - list of images
 * @returns container that calls the image grid component to render the grid layout of images
 */
export const ImageGrid = (props: ImageGridProps) => {
    const { isDesktop, imageList } = props;
    const data = isDesktop
        ? imageList
        : [imageList[2], imageList[3], imageList[1]];

    const newData: ModifiedImgItem[] = data.map((item) => ({
        title: item.title,
        src: item.src,
        config: isDesktop ? item.desktopConfig : item.mobileConfig,
    }));

    return (
        <ImageGridComponent
            modifiedImageList={newData}
            cols={isDesktop ? 16 : 1}
            rowHeight={isDesktop ? 3.6 : 112}
            gap={isDesktop ? 45 : 18}
            marginTop={isDesktop ? 4.75 : 0.5}
        />
    );
};
