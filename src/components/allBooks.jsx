/* eslint-disable react/prop-types */
import { useState } from 'react'
import Book from './Book';
import { CiFilter } from "react-icons/ci";
import AddBookModal from './addBookModal';
import BookDetailsModal from './bookDetailsModal';

const AllBooks = ({ isModalOpen, setIsModalOpen }) => {
  const [BooksData, setBooksData] = useState(
    [
      {
        id: crypto.randomUUID,
        bookName: "মহিমান্বিত কুরআন",
        author: "অনুবাদক: মুফতি আবু উমামা কুতুবুদ্দিন মাহমুদ",
        rating: "5.0",
        price: "990",
        publication: "সিয়ান পাবলিকেশন",
        imageUrl: "https://i.postimg.cc/SNCwhhnS/book1.png",
        category: "Tafsir",
        summery: " মহিমান্বিত কুরআন বইটি একটি বিশেষ বই। এটি কুরআন শরীফের সহজ বাংলা অনুবাদ। এই বইটি পড়লে আপনি কুরআন শরীফ পড়ার সময় আর কুরআন শরীফ পড়ার পর কুরআন শরীফ থেকে কি কি শিখতে পারবেন তা জানতে পারবেন। এই বইটি পড়লে আপনি কুরআন শরীফ পড়ার সময় আর কুরআন শরীফ পড়ার পর কুরআন শরীফ থেকে কি কি শিখতে পারবেন তা জানতে পারবেন।",
      },
      // {
      //   bookName: "ইসলামি সভ্যতায় চিকিৎসা",
      //   author: "ড. রাগিব সারজানী",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "সিয়ান পাবলিকেশন",
      //   imageUrl: "https://i.postimg.cc/C1963PYn/book2.png",
      //   category: "",
      // },
      // {
      //   bookName: "ইমাম নববীর চল্লিশ হাদিস",
      //   author: "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (র) ",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "মাকতাবাতুন নূর",
      //   imageUrl: "https://i.postimg.cc/QdDvNy7p/book3.png",
      //   category: "",
      // },
      // {
      //   bookName: "রিয়াযুস সালেহিন",
      //   author: "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (র)",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "মাকতাবাতুস সুন্নাহ",
      //   imageUrl: "https://i.postimg.cc/Z5JDzykH/book4.png",
      //   category: "",
      // },
      // {
      //   bookName: "আর-রাহিকুল মাখতুম",
      //   author: "আল্লামা সফিউর রহমান মুবারকপুরী (রহ.)",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "সমকালীন প্রকাশন",
      //   imageUrl: "https://i.postimg.cc/CKQv8PRr/book5.png",
      //   category: "",
      // },
      // {
      //   bookName: "নবীজির দিনলিপি ﷺ",
      //   author: "আব্দুল ওয়াহহাব ইবনে নাসির আত-তুরাইরী",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "মাকতাবাতুল আসলাফ",
      //   imageUrl: "https://i.postimg.cc/2y4TPC2g/book6.png",
      //   category: "",
      // },
      // {
      //   bookName: "আক্বীদাহ ত্বহাবিয়্যাহ",
      //   author: "মীযান হারুন",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "রাহনুমা প্রকাশনী",
      //   imageUrl: "https://i.postimg.cc/2yp2c1F4/book7.png",
      //   category: "",
      // },
      // {
      //   bookName: "ঈমান ভঙ্গের কারণ",
      //   author: "শাইখ সুলায়মান ইবনু নাসির আল উলওয়ান",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "সীরাত পাবলিকেশন",
      //   imageUrl: "https://i.postimg.cc/MKS91jGw/book8.png",
      //   category: "",
      // },
      // {
      //   bookName: "হাদীছ অস্বীকারকারীদের...",
      //   author: "ড. আহমাদ আব্দুল্লাহ ছাকিব",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "রুহামা পাবলিকেশন",
      //   imageUrl: "https://i.postimg.cc/CKXN5R2W/book9.png",
      //   category: "",
      // },
      // {
      //   bookName: "ইসলামের ইতিহাস...",
      //   author: "ড. মুহাম্মাদ ইবরাহিম আশ-শারিকি",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "মাকতাবাতুল আসলাফ",
      //   imageUrl: "https://i.postimg.cc/BbGB5d4p/book10.png",
      //   category: "",
      // },
      // {
      //   bookName: "রুকইয়াহ",
      //   author: "আব্দুল্লাহ আল-মাহমুদ",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "সন্দীপন প্রকাশন",
      //   imageUrl: "https://i.postimg.cc/ZRNLdTt0/book11.png",
      //   category: "",
      // },
      // {
      //   bookName: "ইমাম নববীর চল্লিশ হাদিস",
      //   author: "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (র)",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "মাকতাবাতুন নূর",
      //   imageUrl: "https://i.postimg.cc/QdDvNy7p/book3.png",
      //   category: "",
      // },
      // {
      //   bookName: "ইমাম নববীর চল্লিশ হাদিস",
      //   author: "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী (র)",
      //   rating: "5.0",
      //   price: "319 ৳",
      //   publication: "মাকতাবাতুন নূর",
      //   imageUrl: "https://i.postimg.cc/QdDvNy7p/book3.png",
      //   category: "",
      // },
    ]
  );
  const [bookDetailsModal, setBookDetailsModal] = useState(false);
  const [id, setId] = useState('');

  const preventScroll = () => {
    document.body.style.overflow = 'hidden';
  }
  bookDetailsModal ? preventScroll() : document.body.style.overflow = 'auto';

  return (
    <section className='dark:bg-gray-300 '>
      {isModalOpen ? <AddBookModal setIsModalOpen={setIsModalOpen} setBooksData={setBooksData} /> : bookDetailsModal ? <BookDetailsModal setBookDetailsModal={setBookDetailsModal} /> :
        <>
          <div className="filters flex items-center gap-5 ml-5 py-10 overflow-x-auto select-none scroll-smooth hide-scrollbar ">
            <div className="filterIcon text-4xl text-green-600 cursor-pointer">
              <CiFilter />
            </div>
            <div className="filterRating text-nowrap lg:text-xl border border-green-600 py-2.5 px-3.5 rounded-xl font-medium cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300">
              <span>Filter by Rating</span>
            </div>
            <div className="filterPrice text-nowrap lg:text-xl border border-green-600 py-2.5 px-3.5 rounded-xl font-medium cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300">
              <span>Filter by Price</span>
            </div>
            <div className="filterName text-nowrap lg:text-xl border border-green-600 py-2.5 px-3.5 rounded-xl font-medium cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-300">
              <span>Filter by Name</span>
            </div>
          </div>


          <div className='grid lg:grid-cols-3 grid-cols-2 pb-10'>
            {
              BooksData.map((book, index) => (
                <>
                  <div
                    key={index}
                    className='px-2'
                  >
                    <Book
                      book={book}
                      setBookDetailsModal={setBookDetailsModal} setId={setId} />
                  </div>
                </>
              ))
            }
          </div>
        </>
      }
      {bookDetailsModal
        && <BookDetailsModal
          setBookDetailsModal={setBookDetailsModal}
          id={id}
          BooksData={BooksData}
        />}
    </section>
  )
}

export default AllBooks