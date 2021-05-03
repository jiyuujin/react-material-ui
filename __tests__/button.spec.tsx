import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

import { Button as MaterialButton } from '../src/components/button'

const submit = () => {
    console.log('clicked')
}

describe('Button', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<MaterialButton onClick={submit}>OK</MaterialButton>)
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
        wrapper.update()
    })
})
