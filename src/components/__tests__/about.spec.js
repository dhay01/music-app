import About from '@/views/AboutView.vue';
import {shallowMount} from '@vue/test-utils';

describe('About', () => {
    test('renders inner text', () => {
        const wrapper = shallowMount(About);
expect(wrapper.text()).toContain('This');

    })

});