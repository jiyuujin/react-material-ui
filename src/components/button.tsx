import { FC } from 'react'
import { Button as MaterialButton, PropTypes } from '@material-ui/core'

export type ButtonProps = {
    color?: PropTypes.Color
    children: React.ReactNode
    onClick: Function
}

export const Button: FC<ButtonProps> = ({ color, children, onClick }) => {
    const handleClick = (e: any) => {
        onClick()
    }

    return (
        <MaterialButton variant="contained" color={color} onClick={handleClick}>
            {children}
        </MaterialButton>
    )
}

Button.displayName = 'MaterialButton'
