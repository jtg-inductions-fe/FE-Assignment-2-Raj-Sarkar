import { Stack as MuiStack } from '@mui/material';

import { IconButton } from '@components/IconButton';

import { FooterIconsProps } from './FooterIcons.types';

/**
 *
 * @param IconData - data of icon details
 * @returns component for footer icons rendering
 */
export const FooterIcons = (props: FooterIconsProps) => {
    const { iconData } = props;

    return (
        <MuiStack direction="row" spacing={6}>
            {iconData.map((item) => (
                <IconButton
                    key={item.id}
                    component={item.icon}
                    onClick={() => window.open(item.to, '_blank')}
                    aria-label={item.label}
                />
            ))}
        </MuiStack>
    );
};
