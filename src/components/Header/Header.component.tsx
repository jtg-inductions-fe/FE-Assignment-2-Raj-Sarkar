import { Avatar, Stack } from '@mui/material';

import Bell from '@assets/icons/bell.svg?react';
import Logo from '@assets/icons/logo.svg?react';
import Menu from '@assets/icons/menu.svg?react';
import ProfileImg from '@assets/imgs/avatar_1.png';
import { Icon } from '@components/Icon';
import { SearchBar } from '@components/Searchbar';

/**
 *
 * @returns Header component that contains icons , searchbar and avatar
 */
export const Header = () => (
    <Stack direction={'row'} sx={{ justifyContent: 'space-between', p: 4 }}>
        <Stack
            direction={'row'}
            spacing={2}
            sx={{
                justifyContent: 'start',
                alignItems: 'center',
                flexGrow: 1,
            }}
        >
            <Icon
                component={Menu}
                sx={(theme) => ({
                    [theme.breakpoints.up('md')]: {
                        display: 'none',
                    },
                })}
            />
            <Icon
                component={Logo}
                customwidth={35}
                customheight={33}
                sx={(theme) => ({
                    display: 'none',
                    [theme.breakpoints.up('md')]: {
                        display: 'block',
                    },
                })}
            />
            <SearchBar />
        </Stack>
        <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: 'end',
                alignItems: 'center',
                flexGrow: 2,
            }}
        >
            <Icon component={Bell} />
            <Avatar src={ProfileImg} alt="" sx={{ width: 32, height: 32 }} />
        </Stack>
    </Stack>
);
