import { useNavigate } from 'react-router-dom';

import {
    Stack as MuiStack,
    TextField as MuiTextField,
    Typography as MuiTypography,
} from '@mui/material';

import Search from '@assets/icons/search.svg?react';
import { Icon } from '@components/Icon';

import { StyledAutocomplete } from './Searchbar.styles';
import type { SearchBarProps } from './Searchbar.types';

/**
 *
 * @param freesolo - boolean value whether to make freesolo or not
 * @param productList - List of products
 * @returns Search-bar component with autocomplete functionality
 */
export const Searchbar = (props: SearchBarProps) => {
    const { freesolo, productList } = props;
    const navigate = useNavigate();

    /**
     *
     * Clicking on a product will redirect to that page
     * @param selectedOption - value of input box
     */
    const handleOptionChange = (selectedOption: string) => {
        const prod = productList.find(
            (product) =>
                product.title.toLocaleLowerCase() ===
                selectedOption.toLocaleLowerCase(),
        );
        if (prod) {
            void navigate(prod.to ? prod.to : '/');
        } else {
            void navigate(`/${selectedOption.toLocaleLowerCase()}`);
        }
    };

    /**
     *
     * Re-direct to home route when Input field is empty
     * @param inputValue - value of input box
     */
    const handleInputChange = (inputValue: string) => {
        if (!inputValue) {
            void navigate('/');
        }
    };

    return (
        <StyledAutocomplete
            id="searchbar"
            freeSolo={freesolo}
            options={productList.map((prod) => prod.title)}
            renderInput={(params) => (
                <MuiTextField
                    {...params}
                    label={
                        <MuiStack
                            direction={'row'}
                            spacing={2.5}
                            sx={{ alignItems: 'flex-start' }}
                        >
                            <Icon component={Search} />
                            <MuiTypography variant="h4">Search</MuiTypography>
                        </MuiStack>
                    }
                />
            )}
            onChange={(_, value) => {
                if (typeof value === 'string') {
                    handleOptionChange(value);
                }
            }}
            onInputChange={(_, value) => {
                handleInputChange(value);
            }}
        />
    );
};
