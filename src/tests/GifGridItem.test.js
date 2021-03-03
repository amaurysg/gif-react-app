import React from 'react'
import { shallow } from "enzyme"
import GifGridItem from "../components/GifGridItem"

describe('Test in component GifGridItem.js', ()=>{

    test('El render del componente debe estar Ok', () => {

      const wrapper = shallow(<GifGridItem/>)
      expect(wrapper).toMatchSnapshot()
      
    })
    




})
