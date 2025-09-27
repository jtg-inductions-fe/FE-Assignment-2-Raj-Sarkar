import { useNavigate } from 'react-router-dom';

import { InputAdornment } from '@mui/material';

import Search from '@assets/icons/search.svg?react';

import { StyledAutocomplete, StyledTextField } from './Searchbar.styles';
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
                <StyledTextField
                    {...params}
                    placeholder="Search"
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        },
                    }}
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
