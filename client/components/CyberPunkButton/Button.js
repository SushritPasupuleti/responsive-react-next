import React from 'react'
import { ParentButton, ButtonContent, ButtonLabel, GlitchFx } from './Button.elements'

function Button(props) {
    return (
        <ParentButton>
            <ButtonContent primary={props.primary}>2077 Text_</ButtonContent>
            <ButtonLabel primary={props.primary}>r25</ButtonLabel>
            <GlitchFx primary={props.primary}></GlitchFx>
        </ParentButton>
    )
}

export default Button
