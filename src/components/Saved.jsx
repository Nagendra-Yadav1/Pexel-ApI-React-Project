import React from 'react'
function Saved({ saved }) {
  return (
    <div>
      <div className="container-fluid text-center" id="top">
        <div className="flex">
          {saved.map((image) => (
            <div key={image.id} className="items" onClick={() => saveImage(image)}>
              <img src={image.src.medium} alt={image.photographer} />
            </div>
          ))}
        </div>
        {saved.length !== 0 && <a href="#top" className="btn btn-warning my-5">Back to Top</a>}
      </div>
    </div>
  )
}

export default Saved