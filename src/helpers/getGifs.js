
  export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=12&api_key=zoPqydGyVGGouAnSzZyy9d6uvYvTHPcf`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifsData = data.map( gifs => {

        return {
          id: gifs.id,
          title: gifs.title,
          imageUrl: gifs.images?.fixed_width.url,
        }
    })

    // console.log(data);
    // console.log(gifsData);
      return gifsData;
  };