import React, {useRef} from 'react'
import { usePlacesWidget } from "react-google-autocomplete";
import TextField from '@mui/material/TextField';

export const ToAddressInput = ({tD, setTD}) => {
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:'AIzaSyAZLsIumwNVZXD1iaZha9mdc-JoiL3khCE',
        onPlaceSelected: (place) => {
          setTD(place.formatted_address)
        }
      });
      const textRef = useRef()
    
      return <TextField inputRef={ref} label="Destination Address" variant='outlined' required/>
}

export const FromAddressInput = ({fD, setFD}) => {
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey:'AIzaSyAZLsIumwNVZXD1iaZha9mdc-JoiL3khCE',
        onPlaceSelected: (place) => {
          setFD(place.formatted_address)
        }
      });
      const textRef = useRef()
    
      return <TextField inputRef={ref} label="Starting Address" variant='outlined' required/>
}

