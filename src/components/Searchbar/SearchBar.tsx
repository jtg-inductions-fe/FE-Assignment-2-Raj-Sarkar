import { Stack, TextField } from '@mui/material';

import Search from '@assets/icons/search.svg?react';
import { Icon } from '@components/Icon';

import { StyledAutocomplete } from './SearchBar.styles';

export const SearchBar = () => {
    const productList = [
        {
            name: 'Restaurant Booking App',
            technology: 'React & Bootstrap Framework',
            sales: 70,
        },
        {
            name: 'UI Kit',
            technology: 'React & Bootstrap Framework',
            sales: 54,
        },
        {
            name: 'Design System Pro',
            technology: 'Bootstrap Framework',
            sales: 47,
        },
        { name: 'Dashboard', technology: 'Tailwind, React', sales: 43 },
        {
            name: 'Glassmorphism UI',
            technology: 'Vue Js, Tailwind ',
            sales: 38,
        },
        {
            name: 'Multipurpose Template',
            technology: 'React & Bootstrap Framework',
            sales: 22,
        },
    ];

    return (
        <StyledAutocomplete
            id="free-solo-demo"
            freeSolo
            options={productList.map((prod) => prod.name)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={
                        <Stack direction={'row'}>
                            <Icon component={Search} />
                            Search
                        </Stack>
                    }
                />
            )}
        />
    );
};
