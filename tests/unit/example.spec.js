import { mount } from '@vue/test-utils'
import DashboardPage1 from '@/views/DashboardPage1.vue'
import { describe, expect, test } from 'vitest'

describe('DashboardPage1.vue', () => {
  test('renders tab 1 DashboardPage1', () => {
    const wrapper = mount(DashboardPage1)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
