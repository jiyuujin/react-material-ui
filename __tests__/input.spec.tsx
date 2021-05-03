import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

import { Input as MaterialInput } from '../src/components/input'

const setValue = () => {
    console.log('updated')
}

describe('Input', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<MaterialInput value={'Input'} onChange={setValue} />)
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
        wrapper.update()
    })
})
