import { FC } from 'react'
import { Select as MaterialSelect, MenuItem } from '@material-ui/core'

export type SelectProps = {
    id?: string
    label?: string
    options: Array<{
        value: number
        text: string
    }>
    value: number
    onChange: Function
}

export const Select: FC<SelectProps> = ({
    id,
    label,
    options,
    value,
    onChange,
}) => {
    const handleChange = (e: any) => {
        onChange(e.target.value)
    }

    return (
        <MaterialSelect
            labelId={label}
            id={id}
            value={value}
            onChange={handleChange}
        >
            {options.map((option: { value: number; text: string }) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.text}
                </MenuItem>
            ))}
        </MaterialSelect>
    )
}

Select.displayName = 'MaterialSelect'
