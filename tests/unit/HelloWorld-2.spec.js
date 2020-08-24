import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
// import { iterator } from 'core-js/fn/symbol'

describe('HelloWorld.vue Test', () =>{
    it('renders message when component is created', () => {
        // render the component
        const wrapper = shallowMount(HelloWorld, {
            propsData: {
                msg: 'Hello'
            }
        })

        // check the name of the component
        expect(wrapper.name()).toMatch('HelloWorld')

        // check that the message is rendered
        expect(wrapper.text()).toMatch('Hello')
    })
})
