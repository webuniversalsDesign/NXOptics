import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useNavigate } from 'react-router-dom';

const AutocompleteSearchBox = () => {

  const navigate = useNavigate();

    const top100Films = [
    { label: 'Network & Security', url: '/NetworkSecurity'} ,
        { label: 'Server & Storage', url: '/ServerStorage'},
        // { label: 'The Godfather: Part II', year: 1974 , url: '/'},
        // { label: 'The Dark Knight', year: 2008 , url: '/'},
        // { label: '12 Angry Men', year: 1957 , url: '/'},
        // { label: "Schindler's List", year: 1993 , url: '/'},
        // { label: 'Pulp Fiction', year: 1994 , url: '/'},
       
      ];


      const handleSelect = (movie) => {
        if (movie && movie.url) {
          navigate(movie.url);
        }
      };

  return (
    <>
        <Autocomplete
        disablePortal
        options={top100Films}
        sx={{
          display: 'inline-block',
          '& input': {
            width: 400,
            bgcolor: 'background.paper',
            borderRadius:'10px',
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        id="custom-input-demo"
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} label="Search Products" />}
        onChange={(event, newValue) => handleSelect(newValue)}
      />
    </>
  )
}

export default AutocompleteSearchBox;
