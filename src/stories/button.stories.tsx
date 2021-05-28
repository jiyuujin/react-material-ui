import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../components/button'

storiesOf('Element', module)
    .add('Normal Button', () => (
        <Button onClick={action('clicked')}>Button</Button>
    ))
    .add('Primary Button', () => (
        <Button color={'primary'} onClick={action('clicked')}>
            Button
        </Button>
    ))
    .add('Secondary Button', () => (
        <Button color={'secondary'} onClick={action('clicked')}>
            Button
        </Button>
    ))
