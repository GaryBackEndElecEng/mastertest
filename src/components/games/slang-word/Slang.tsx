"use client";
import React from 'react'
import FetchApi from './FetchApi';
import {Container} from "@mui/material";




export const sound_clip="this_is_a_very_long_64_bit_sound_string";
const Slang = () => {
    
    return (
        <Container maxWidth="lg" className=" my-2">
            <div className="grid place-items-center">
                <h3 className="text-2xl text-center">Slang Word Definition</h3>
                <FetchApi/>
                
            </div>
        </Container>
    )
}

export default Slang