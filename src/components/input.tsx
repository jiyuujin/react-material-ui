import { FC, useState } from 'react'
import styled from 'styled-components'
import { TextField, OutlinedInput } from '@material-ui/core'

const SuggestListStyle = styled.ul`
    padding: 0 4px;
    margin: 0;
    border: solid 1px #d6d6d6;
    border-top: none;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
`

const SuggestListItemStyle = styled.li`
    border-top: solid 1px #d6d6d6;
    background-color: #fff;
    line-height: 2.5;
    height: 2.5em;
    display: flex;
`

export type InputProps = {
    id?: string
    label?: string
    value: string
    placeholder?: string
    password?: boolean
    targets?: string[]
    multiline?: boolean
    onChange: Function
}

export const Input: FC<InputProps> = ({
    id,
    label,
    value,
    placeholder = '',
    password = false,
    targets = [],
    multiline = false,
    onChange,
}) => {
    let [suggests, setSuggests] = useState([])
    let [isShow, setIsShow] = useState(targets.length !== 0)

    const handleInput = (e: any) => {
        setIsShow(true)
        let newSuggest = []
        for (const t of targets) {
            if (t.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
                newSuggest.push(t)
            }
        }
        setSuggests(newSuggest)
        onChange(e.target.value)
    }

    const handleInputDirectly = (text: string) => {
        onChange(text)
        setIsShow(false)
    }

    return (
        <>
            {password ? (
                <OutlinedInput
                    id={id}
                    type="password"
                    value={value}
                    placeholder={placeholder}
                    onChange={handleInput}
                    labelWidth={70}
                />
            ) : (
                <>
                    <form noValidate autoComplete="off">
                        <TextField
                            id={id}
                            label={label}
                            placeholder={placeholder}
                            multiline
                            onChange={handleInput}
                        />
                    </form>
                    {isShow && (
                        <SuggestListStyle>
                            {value &&
                                suggests.map((s) => (
                                    <SuggestListItemStyle
                                        key={s}
                                        onClick={() => handleInputDirectly(s)}
                                    >
                                        {s}
                                    </SuggestListItemStyle>
                                ))}
                        </SuggestListStyle>
                    )}
                </>
            )}
        </>
    )
}

Input.displayName = 'MaterialInput'
