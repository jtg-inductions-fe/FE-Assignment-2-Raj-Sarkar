import { Stack as MuiStack } from '@mui/material';

import { IconButton } from '@components/IconButton';

import { FooterIconsProps } from './FooterIcons.types';

/**
 *
 * @param IconData - data of icon details
 * @returns
 */
export const FooterIcons = (props: FooterIconsProps) => {
    const { iconData } = props;

    return (
        <MuiStack direction={'row'} spacing={6}>
            {iconData.map((item) => (
                <IconButton
                    key={item.id}
                    component={item.icon}
                    onClick={() => (window.location.href = item.to)}
                />
            ))}
        </MuiStack>
    );
};
