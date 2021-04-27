import { FC } from 'react'
import { InputLabel } from '@material-ui/core'

export type LabelProps = {
    children: React.ReactNode
}

export const Label: FC<LabelProps> = ({ children }) => {
    return <InputLabel id="label">{children}</InputLabel>
}

Label.displayName = 'MaterialLabel'
