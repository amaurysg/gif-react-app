import React from 'react'
import { shallow } from "enzyme"
import AddCategory from "../components/AddCategory"

describe('Test component AddCategory.js', () => {
  
  const setCategories = jest.fn()
  //My let wrapper component, 
  //Is defined of this way for the completed helpers .find .html ect ect 
   let wrapper = shallow(<AddCategory setCategories={setCategories} />)
  

   //This is of the life cicle of test. 
  beforeEach(() => {
    //Restart simulates  
    jest.clearAllMocks()
    //Restart initial state of my component 
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('Debe renderizar el component OK', () => {



      expect(wrapper).toMatchSnapshot()

  })
  
  test('Debe cambiar la caja de text', () => {

    const input = wrapper.find('input')
    console.log(input.html())
    const value = 'either value'
    input.simulate('change',{ target:{value}})
    expect(wrapper.find('p').text().trim()).toBe(value)
    

  })

  //Simular input 
  test(' No debe de poster la información ', () => {
    
    //Here make simulated, also add method preventDefault, 
    //In this case is mandatory add that 
    wrapper.find('form').simulate('submit',{ preventDefault(){}})
    

    expect(setCategories).not.toHaveBeenCalled()

  })

  test('Debe de llamar el setCategpry y limpiar la caja', () => {

    //1. Simular el inputChange 
    const value = 'other either value'
    wrapper.find('input').simulate('change', {target:{value}})
    
    //2.Simular submit 
    wrapper.find('form').simulate('submit', {preventDefault(){}})

    //3. setCategories se debe haber llamado
     expect(setCategories).toHaveBeenCalled()
     /* expect(setCategories).toHaveBeenCalledTimes(1) */
     expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

     //4. El valor de la caja de text debe limpiarse 
     expect(wrapper.find('input').prop('value')).toBe('')
     
    
  })
  
  

  

})
