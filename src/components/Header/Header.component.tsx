import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Avatar, Box, Popover, Stack, Typography } from '@mui/material';

import Bell from '@assets/icons/bell.svg?react';
import Logo from '@assets/icons/logo.svg?react';
import Menu from '@assets/icons/menu.svg?react';
import ProfileImg from '@assets/imgs/avatar_1.png';
import { StyledHeaderStack } from '@components/Header';
import { IconButton } from '@components/IconButton';
import { SearchBar } from '@components/Searchbar';
import { PRODUCT_LIST, USERS } from '@constant';
import { handleClickByNavigate } from '@helper';
import { HeaderProps } from '@types';

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
            <Stack
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
                    customwidth={28}
                    customheight={28}
                    onClick={onMenuClick}
                />
                <IconButton
                    component={Logo}
                    customwidth={35}
                    customheight={35}
                    hideinmobile={true}
                    showshadow={true}
                    onClick={() =>
                        handleClickByNavigate({ navigate, path: '/' })
                    }
                />
                <SearchBar productList={PRODUCT_LIST} freesolo={true} />
            </Stack>
            <Stack
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
                        handleClickByNavigate({
                            navigate,
                            path: '/notification',
                        })
                    }
                />
                <Box>
                    <Avatar
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
                    <Popover
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
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h3">
                                {USERS[0].username}
                            </Typography>
                            <Typography variant="h4">
                                {USERS[0].email}
                            </Typography>
                        </Box>
                    </Popover>
                </Box>
            </Stack>
        </StyledHeaderStack>
    );
};
