import getGifs from "../helpers/getGifs"


describe('Test in getGif', () => {
  
  test('Debe traer 10 documentos ', async () => {
    const gifs = await getGifs('Messi')
    expect(gifs.length).toBe(10)

  })
  
  test('Category empty, so : [] ', async () => {
    const gifs = await getGifs()
    
    expect(gifs).toEqual([])

  })
  


})
