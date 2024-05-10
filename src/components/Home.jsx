import React from 'react';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home({ images, setSaved, saved }) {
  const saveImage = (img) => {
    let flag = true
    if (saved != null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
          flag = false
          toast.info('Image is already exits!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          break;
        }

      }
    }
    if (flag) {
      setSaved([...saved, img])
      toast.success('image saved', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }


  }

  return (
    <>
      <ToastContainer />
      <div className="container-fluid text-center" id="top">
        <div className="flex">
          {images.map((image) => (
            <div key={image.id} className="items" onClick={() => saveImage(image)}>
              <img src={image.src.medium} alt={image.photographer} />
            </div>
          ))}
        </div>
        {images.length !== 0 && <a href="#top" className="btn btn-warning my-5">Back to Top</a>}
      </div>
    </>
  );
}

export default Home;


