import { useEffect } from 'react'
import { useGlobalState } from '../store'
import { isWallectConnected, loadNfts } from '../utils/Adulam'
import Alert from '../components/Alert'
import Artworks from '../components/Artworks'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Loading from '../components/Loading'

const App = () => {
  const [nfts] = useGlobalState('nfts')

  useEffect(() => {
    const fetchData = async () => {
      await isWallectConnected();
      await loadNfts();
      console.log('Blockchain Loaded');
    };
  
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks artworks={nfts} />
      <Footer />
      <Loading />
      <Alert />
    </div>
  )
}

export default App
