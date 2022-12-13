import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useState } from 'react';

const ArticleSearch = ({ articles, setSearchValue, searchValue }) => {
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Stack
            spacing={2}
            sx={{ width: '50%', minWidth: '300px', marginInline: 'auto' }}>
            {/* <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={articles?.map((option) => option.title)}
                renderInput={(params) => (
                    <Box component={'form'} sx={{ display: 'flex' }}>
                        <TextField {...params} label="Search Article" />
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            sx={{ backgroundColor: '#36465d' }}
                            endIcon={<SearchSharpIcon />}>
                            Search
                        </Button>
                    </Box>
                )}
            /> */}
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={
                    articles.length &&
                    articles?.slice(0, 5)?.map((option) => option.title)
                }
                renderInput={(params) => (
                    <Box component={'form'} sx={{ display: 'flex' }}>
                        <TextField
                            value={searchValue}
                            onChange={(e) => handleChange(e)}
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            sx={{ backgroundColor: '#36465d' }}
                            endIcon={<SearchSharpIcon />}>
                            Search
                        </Button>
                    </Box>
                )}
            />
        </Stack>
    );
};

export default ArticleSearch;
