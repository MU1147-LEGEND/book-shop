import { useState } from 'react';
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
    </>
  )
}

export default App