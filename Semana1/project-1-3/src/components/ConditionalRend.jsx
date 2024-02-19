import { useState } from "react"

const ConditionalRend = () => {

  const handleImg = () => { 
    setImg(!img)
  }

  const [img, setImg] = useState(false)

  return (
    <div>
      <div>
        <button onClick={handleImg}>{
          img ? 'Hide Image' : 'Show Image'
        }</button>
        <div>
          {
            img && <img className="perrito" src="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg" alt="" />
          }
        </div>
      </div>
    </div>
  )
}
export default ConditionalRend