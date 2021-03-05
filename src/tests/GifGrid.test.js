import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import GifGrid from "../components/GifGrid"
import useFetchGifs from '../hooks/useFetchGifs'

//Fingimos llamada al archivo
jest.mock('../hooks/useFetchGifs')

describe('Test component GifGrid', () => {

  const category = 'Eric Cartman'

  test('Show component correct', () => {

       useFetchGifs.mockReturnValue({
                data: [],
                loading: true,
            });

        const wrapper = shallow(<GifGrid  category={category} />)
        expect(wrapper).toMatchSnapshot()
        
  })

  test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
    
    //Antes de renderizar el componente, simulamos tener data 
    const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'ABC Title'
        },
        {
            id: 'ABCss',
            url: 'https://google.cosm',
            title: 'ABCss Title'
        }
      ]
    //Ocupamos useFetchGifs 
      useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
    
    const wrapper = shallow(<GifGrid  category={category} />)
     expect(wrapper).toMatchSnapshot();
     //No debería de existir este <p> en caso que haya data
     expect(wrapper.find('p').exists()).toBe(false)
     //Evaluamos si existen datas dentro de gifgriditem
     expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

  })
  
  
  
})
