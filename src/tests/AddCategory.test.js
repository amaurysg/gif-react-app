import React from 'react'
import { shallow } from "enzyme"
import AddCategory from "../components/AddCategory"

describe('Test component AddCategory.js', () => {
  
  test('Debe renderizar el component OK', () => {

      const setCategories = ()=>{}

      const wrapper = shallow(<AddCategory setCategories={setCategories} />)

      expect(wrapper).toMatchSnapshot()

  })
  

})
