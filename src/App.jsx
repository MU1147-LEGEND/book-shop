import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AllBooks from './components/allBooks'
import Footer from './shared/footer'
import Header from './shared/header'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AllBooks isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App