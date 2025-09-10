import { useNavigate } from 'react-router-dom';

import { Stack, TextField } from '@mui/material';
import { Typography } from '@mui/material';

import Search from '@assets/icons/search.svg?react';
import { Icon } from '@components/Icon';
import { handleInputChange, handleOptionChange } from '@helper';
import { SearchBarProps } from '@types';

import { StyledAutocomplete } from './SearchBar.styles';

/**
 *
 * @param freesolo - boolean value whether to make freesolo or not
 * @param productList - List of products
 * @returns Search-bar component with autocomplete functionality
 */
export const SearchBar = (props: SearchBarProps) => {
    const { freesolo, productList } = props;
    const navigate = useNavigate();

    return (
        <StyledAutocomplete
            id="free-solo-demo"
            freeSolo={freesolo}
            options={productList.map((prod) => prod.name)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={
                        <Stack
                            direction={'row'}
                            spacing={2.5}
                            sx={{ alignItems: 'center' }}
                        >
                            <Icon component={Search} />
                            <Typography variant="h4">Search</Typography>
                        </Stack>
                    }
                />
            )}
            onChange={(e, value) => {
                if (typeof value === 'string') {
                    handleOptionChange({
                        e,
                        value,
                        productList,
                        navigate,
                    });
                }
            }}
            onInputChange={(e, value) => {
                handleInputChange({ e, value, navigate });
            }}
        />
    );
};
