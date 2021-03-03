import React from 'react'
import { shallow } from "enzyme"
import GifGridItem from "../components/GifGridItem"

describe('Test in component GifGridItem.js', ()=>{

  const title = 'Titulo'
  const id = 'Un id'
  const url = 'Un url'
  const wrapper = shallow(<GifGridItem title={title} id={id} url={url} />)
  
  test('El render del componente debe estar Ok', () => {
    

      expect(wrapper).toMatchSnapshot()
      
    })

    test('Debe tener un <p/> con title', () => {
      
      const p = wrapper.find('p').text().trim()
      expect(p).toBe(title)

    })

    test('Debe tener la img = url and alt = title ', () => {

      const img = wrapper.find('img')

      /* Maneras de entrar a html y props */

      /* console.log(img.html()) */
      /* props() para acceder a las propiedas de html */
      /* console.log(img.props()) */
       /*   console.log(img.prop('src'))
         console.log(img.prop('alt')) */

        /* Ahora hacemos el expect */
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)

    })

    test('Debe tener class animate__slideInDown ', () => {
      const div = wrapper.find('div')
      
      expect(div.hasClass('animate__slideInDown')).toBe(true)

      
    })
    
    
    
    




})
