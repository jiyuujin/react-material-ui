import { FC } from 'react'
import { Button as MaterialButton } from '@material-ui/core'

export type ButtonProps = {
    children: React.ReactNode
    onClick: Function
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
    const handleClick = (e: any) => {
        onClick()
    }

    return (
        <MaterialButton
            variant="contained"
            color="primary"
            onClick={handleClick}
        >
            {children}
        </MaterialButton>
    )
}

Button.displayName = 'MaterialButton'
