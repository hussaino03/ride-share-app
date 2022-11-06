import React, {useRef} from 'react'
import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import TextField from '@mui/material/TextField';
import { AddressAutofill } from '@mapbox/search-js-react';


export const ToAddressInput = ({tD, setTD}) => {
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:'AIzaSyAZLsIumwNVZXD1iaZha9mdc-JoiL3khCE',
        onPlaceSelected: (place) => {
          setTD(place.formatted_address)
        },
        options: {
            types: 'street_address'
        }
      });
      const textRef = useRef()
    
    //   return <TextField inputRef={ref} label="Destination Address" variant='outlined' required />
    return (
        <AddressAutofill accessToken="pk.eyJ1IjoidmF3ZXNvbWUwNTM0IiwiYSI6ImNsYTRuZHd0ZzEzNnUzdm1oM2swNmt6NDEifQ.9yjQTb-pMbEmhA_N5zebFA">
        <input
            name="address" placeholder="Address" type="text"
            autoComplete="address-line1"
        />
    </AddressAutofill>
    )


}

export const FromAddressInput = ({fD, setFD}) => {
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:'AIzaSyAZLsIumwNVZXD1iaZha9mdc-JoiL3khCE',
        onPlaceSelected: (place) => {
          setFD(place.formatted_address)
        }
      });
      const textRef = useRef()
    
      return <Autocomplete
      apiKey='AIzaSyAZLsIumwNVZXD1iaZha9mdc-JoiL3khCE'
      onPlaceSelected={(place) => {
        console.log(place);
      }}
      types={['(street_address)']}
      
    />;
}

