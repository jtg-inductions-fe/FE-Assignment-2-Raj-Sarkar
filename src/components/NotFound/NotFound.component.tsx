import { Stack as MuiStack } from '@mui/material';

import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import { theme } from '@theme';

import type { NotFoundProps } from './NotFound.types';

/**
 * Types for notfound component
 * @param image - image src string to render
 * @param imageAlt - alt text for the image
 * @param heading - heading text for the page
 * @param description - description for the page
 * @param buttonContent - text content inside the button
 * @param href - path to be re-directed upon clicking the button
 * @param isDesktop - boolean value for view width is desktop or not
 */
export const NotFound = (props: NotFoundProps) => {
    const {
        image,
        imageAlt,
        heading,
        description,
        buttonContent,
        buttonHref,
        isDesktop,
    } = props;

    return (
        <MuiStack alignItems={'center'} gap={4} width={'100vw'}>
            <img src={image} alt={imageAlt} width={isDesktop ? '60%' : '90%'} />
            <MuiStack gap={5.5} alignItems={'center'} paddingX={4}>
                <MuiStack gap={2.5}>
                    <Typography variant="h1" lines={3} textAlign={'center'}>
                        {heading}
                    </Typography>
                    <Typography
                        variant="h4"
                        lines={5}
                        color={theme.palette.grey[500]}
                        textAlign={'center'}
                    >
                        {description}
                    </Typography>
                </MuiStack>
                <Button buttonHref={buttonHref} buttonContent={buttonContent}>
                    {buttonContent}
                </Button>
            </MuiStack>
        </MuiStack>
    );
};
