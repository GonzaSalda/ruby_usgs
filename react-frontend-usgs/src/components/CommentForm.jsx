import React, {  } from 'react'
import { useFeaturesContex } from '../context/FeaturesContex';

const CommentForm = ({id}) => {

  const{handleSubmit,body,setBody} = useFeaturesContex();


  return (
    <>
    <form onSubmit={(e)=> handleSubmit(e,id)}>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Escribe un comentario..."
          />
          <button type="submit">Enviar Comentario</button>
        </form>
    </>
  )
}

export default CommentForm