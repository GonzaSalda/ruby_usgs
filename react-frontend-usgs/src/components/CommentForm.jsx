import React, {  } from 'react'
import { useFeaturesContex } from '../context/FeaturesContex';

const CommentForm = ({id}) => {

  const{handleSubmit,body,setBody} = useFeaturesContex();


  return (
    <>
    <form className='flex items-center gap-y-2 justify-center flex-col ' onSubmit={(e)=> handleSubmit(e,id)}>
          <textarea className='w-full text-black p-[2px]'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Escribe un comentario..."
          />
          <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300' type="submit">Enviar Comentario</button>
        </form>
    </>
  )
}

export default CommentForm