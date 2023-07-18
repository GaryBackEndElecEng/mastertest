"use client";
import React from 'react'

export const sound_clip="this_is_a_very_long_64_bit_sound_string";

const sound = ():void => {
    let audio=new Audio("data:audio/wav;base64" + sound_clip)
    audio.play();
}

export default sound