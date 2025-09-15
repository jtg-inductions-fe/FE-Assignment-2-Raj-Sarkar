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
import { StyledHeaderStack } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { Searchbar } from '@components/Searchbar';
import { PRODUCT_LIST } from '@constant';
import { navigateToPage } from '@helper';
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
                    hideintablet={true}
                    buttonsize={'md'}
                    onClick={onMenuClick}
                />
                <IconButton
                    component={Logo}
                    buttonsize={'lg'}
                    hideinmobile={true}
                    showshadow={true}
                    onClick={() => navigateToPage({ navigate, path: '/' })}
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
                    showshadow={true}
                    onClick={() =>
                        navigateToPage({
                            navigate,
                            path: '/notification',
                        })
                    }
                />
                <MuiBox>
                    <MuiAvatar
                        src={ProfileImg}
                        alt=""
                        component={'button'}
                        type="button"
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
