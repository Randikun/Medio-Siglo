import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import getFotoDetail from '../actions/getFotoDetail'

export default function FotoDetail(props){
  const dispatch = useDispatch()
  const fotoDetail = useSelector(state=>state.fotoDetail)
  const {id} = useParams()
  useEffect(()=>{
    dispatch(getFotoDetail(id))
  },[dispatch])
 console.log("traido del estado",fotoDetail)
    return(
        <div>
            <figure>
                <img src={fotoDetail.img} alt="disfrutando con amigos"/>
            </figure>
            <div>COMENTARIOS</div>
            <div>ADD A COMMENT</div>
        </div>
    )
}