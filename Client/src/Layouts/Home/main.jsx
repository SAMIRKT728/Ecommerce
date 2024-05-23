import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer16 from "./components/Footer";
import ProductListSection4 from "./components/Productos";
import HeroSection16 from "./components/hero";


export function Home() {
  const navigate = useNavigate();
  const [redirected, setRedirected] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('jw-token');

    if (!token && !redirected) {
        navigate('/sign-in');
        setRedirected(true); 
      }
  }, [navigate, redirected]); 

  if (redirected) {
    return null;
  }

  return (
    <>
      <HeroSection16 />
      <ProductListSection4 />
      <Footer16 />
    </>
  );
}

export default Home;
