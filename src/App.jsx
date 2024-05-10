import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Saved from './components/Saved';
import Loader from './components/Loader';
function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature")
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState([])
  const API_KEY = 'Jy3N5q7rmvMQiOrCq2shd96Sc53mtOT5pR2Iriu0l3IrR4UIekwprcG5';

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        console.log
        setImages(res.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }

      const local_data = JSON.parse(localStorage.getItem("Image"));
      if (local_data) {
        setSaved(local_data);
      }
    };

    fetchImage();


  }, [search]);

  useEffect(() => {
    if (saved.length !== 0) {
      const json = JSON.stringify(saved)
      localStorage.setItem("Image", json)

    }

  }, [saved])


  return (
    <div>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={loading ? <Loader /> : <Home images={images} saved={saved} setSaved={setSaved} />}
          />
          <Route path="/saved" element={loading ? <Loader /> : <Saved saved={saved} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
