import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ReactMarkdown from "react-markdown"
import { getReadme } from "../redux/reducers/users"


const Readme = () => {

  const { repos } = useParams()
  const dispatch = useDispatch()
  const readme = useSelector((store) => store.users.readme)


  useEffect(() => {
    dispatch(getReadme(repos))
  }, [])

  return (
    <div>
      <ReactMarkdown source = {readme}/>
    </div>
  )

}

export default Readme