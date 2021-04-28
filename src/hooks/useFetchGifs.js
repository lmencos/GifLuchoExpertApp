import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect( () => {
    getGifs( category )
      .then( imgs => {

        setTimeout(() => {
          setState( {
            data: imgs,
            loading: false,
          } )
        }, 1800);

      })
  },[ category ]);

  return state; // { data: [], loading: true }

}
