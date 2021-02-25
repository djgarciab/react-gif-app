
    export const getGifs = async(category) => {
        // encodeURI reemplaza espacios por % para realizar peticiones de búsqueda
        const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=gf4g9mGbiJeLffv8SPJyt47sCA7ivE9M&limit=10`
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        // console.log(gifs);
        return gifs;
        //setImages(gifs);
    }
