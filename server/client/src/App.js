import './App.css';
import { Box } from '@mui/system';
//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    < div className="App" style={{textAlign:"center"}}>
      <DataProvider>    {/*Now whatever states are there in DataProvider -- now can be ues by all these elements */}
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: "4rem" }}>     {/*As hedder is taking 64px */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} /> 
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </div >
  );
}

export default App;
