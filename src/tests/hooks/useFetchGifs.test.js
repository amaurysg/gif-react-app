import useFetchGifs from "../../hooks/useFetchGifs"
import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react-hooks'

describe('Tests en useFetch HOOKS', () => {

    test('Debe retornar el estado inicial', async () => {
      
    /*   npm install --save-dev @testing-library/react-hooks 
          libreria para capturas datos de hooks
    
    */

        const  {result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') )
        const {data, loading} = result.current
         await waitForNextUpdate()
        console.log(data, loading)

        expect(data).toEqual([])
        expect(loading).toEqual(true)
     /*    console.log(result) */
          /* const {data:images, loading} = useFetchGifs('Dragon Ball') */

    })

    test('Debe de retornar arreglo de imgs y loading false', async  () => {
        const  {result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') )
        await waitForNextUpdate()
        
        const {data, loading} = result.current
        console.log(data, loading)

        expect(data.length).toBe(10)
        expect(loading).toBe(false)
      
    })
    
  
})
