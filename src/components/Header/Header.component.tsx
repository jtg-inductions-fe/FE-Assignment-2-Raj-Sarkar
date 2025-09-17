import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    Avatar as MuiAvatar,
    Box as MuiBox,
    Popover as MuiPopover,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';

import Bell from '@assets/icons/bell.svg?react';
import Logo from '@assets/icons/logo.svg?react';
import Menu from '@assets/icons/menu.svg?react';
import ProfileImg from '@assets/imgs/avatar_1.png';
import { StyledHeaderStack } from '@components/Header/Header.styles';
import { IconButton } from '@components/IconButton';
import { Searchbar } from '@components/Searchbar';
<<<<<<< HEAD
import { PRODUCT_LIST, ROUTE_PATH } from '@constant';
import { navigateToPage } from '@helper';
=======
import { PRODUCT_LIST } from '@constant';
>>>>>>> a097c63 ([RS_A2_04]: Created chart and fixed helpers)
import { userDetails } from '@store';

import { HeaderProps } from './Header.types';

/**
 *
 * @param onMenuClick - Function to handle click on menu bar
 * @returns Header component that contains icons , searchbar and avatar
 */
export const Header = (props: HeaderProps) => {
    const { onMenuClick } = props;
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <StyledHeaderStack>
            <MuiStack
                direction={'row'}
                sx={{
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: 8,
                    flexGrow: 1,
                }}
            >
                <IconButton
                    component={Menu}
                    aria-label="Open Menu"
                    hideintablet={true}
                    buttonsize={'md'}
                    onClick={onMenuClick}
                />
                <IconButton
                    aria-label="Go to home"
                    component={Logo}
                    buttonsize={'lg'}
                    hideinmobile={true}
                    showshadow={true}
<<<<<<< HEAD
                    onClick={() =>
                        navigateToPage({ navigate, path: ROUTE_PATH.HOME })
                    }
=======
                    onClick={() => void navigate('/')}
>>>>>>> a097c63 ([RS_A2_04]: Created chart and fixed helpers)
                />
                <Searchbar productList={PRODUCT_LIST} freesolo />
            </MuiStack>
            <MuiStack
                direction="row"
                spacing={3}
                sx={{
                    justifyContent: 'end',
                    alignItems: 'center',
                    flexGrow: 2,
                }}
            >
                <IconButton
                    component={Bell}
                    aria-label="Go to notifications"
                    showshadow={true}
<<<<<<< HEAD
                    onClick={() =>
                        navigateToPage({
                            navigate,
                            path: ROUTE_PATH.NOTIFICATIONS,
                        })
                    }
=======
                    onClick={() => void navigate('/notification')}
>>>>>>> a097c63 ([RS_A2_04]: Created chart and fixed helpers)
                />
                <MuiBox>
                    <MuiAvatar
                        src={ProfileImg}
                        alt=""
                        component={'button'}
                        type="button"
                        aria-label="See user details"
                        sx={{
                            width: 32,
                            height: 32,
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            p: 0,
                        }}
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
                        <MuiBox sx={{ p: 2 }}>
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
