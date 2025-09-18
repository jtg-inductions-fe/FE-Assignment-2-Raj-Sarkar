import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    Box as MuiBox,
    Popover as MuiPopover,
    Stack as MuiStack,
    Typography as MuiTypography,
    useMediaQuery,
} from '@mui/material';

import Bell from '@assets/icons/bell.svg?react';
import Logo from '@assets/icons/logo.svg?react';
import Menu from '@assets/icons/menu.svg?react';
import ProfileImg from '@assets/imgs/avatar_1.png';
import { IconButton } from '@components/IconButton';
import { Searchbar } from '@components/Searchbar';
import { PRODUCT_LIST } from '@constant';
import { userDetails } from '@store';
import { theme } from '@theme';

import { StyledAvatar, StyledHeaderStack } from './Header.styles';
import type { HeaderProps } from './Header.types';

/**
 *
 * @param onMenuClick - Function to handle click on menu bar
 * @returns Header container that contains icons , searchbar and avatar
 */
export const Header = (props: HeaderProps) => {
    const { onMenuClick } = props;
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <StyledHeaderStack>
            <MuiStack
                direction={'row'}
                justifyContent={'start'}
                alignItems={'center'}
                gap={8}
                flexGrow={1}
            >
                {!isDesktop && (
                    <IconButton
                        component={Menu}
                        aria-label="Open Menu"
                        buttonSize={'md'}
                        onClick={onMenuClick}
                    />
                )}
                {isDesktop && (
                    <IconButton
                        aria-label="Go to home"
                        component={Logo}
                        buttonSize={'lg'}
                        showShadow={true}
                        onClick={() => void navigate('/')}
                    />
                )}
                <Searchbar productList={PRODUCT_LIST} freesolo />
            </MuiStack>
            <MuiStack
                direction="row"
                spacing={3}
                justifyContent={'end'}
                alignItems={'center'}
                flexGrow={2}
                spacing={isDesktop ? 3 : 1}
            >
                <IconButton
                    component={Bell}
                    aria-label="Go to notifications"
                    showShadow={true}
                    customColor={theme.palette.grey[900]}
                    padding={8}
                    onClick={() => void navigate('/notification')}
                />
                <MuiBox>
                    <StyledAvatar
                        src={ProfileImg}
                        alt=""
                        component={'button'}
                        aria-label="See user details"
                        aria-describedby={id}
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                    />
                    <MuiPopover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <MuiBox padding={3}>
                            <MuiTypography variant="h3">
                                {userDetails?.username}
                            </MuiTypography>
                            <MuiTypography variant="h4">
                                {userDetails?.email}
                            </MuiTypography>
                        </MuiBox>
                    </MuiPopover>
                </MuiBox>
            </MuiStack>
        </StyledHeaderStack>
    );
};
