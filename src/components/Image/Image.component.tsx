import { ImageProps } from './Image.types';

/**
 *
 * @param src - source of image to render
 * @param srcSet - srcSet prop for image
 * @param alt - alt value in image
 * @returns component for rendering a single image
 */
export const Image = (props: ImageProps) => {
    const { src, srcSet, alt } = props;

    return <img src={src} srcSet={srcSet} alt={alt} loading="lazy" />;
};
