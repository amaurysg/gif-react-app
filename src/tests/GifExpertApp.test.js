import React from 'react'
import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Test component <GifExpertApp/>', () => {

  
  test('Render component Ok', () => {
    const wrapper = shallow(<GifExpertApp/>)
    expect(wrapper).toMatchSnapshot()
  })
  test('should ', () => {
    const categories =['Dragon Ball','Naruto']
    const wrapper = shallow(<GifExpertApp  defaultCategory={categories} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
    
  })
  
  
})
