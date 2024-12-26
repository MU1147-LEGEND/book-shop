/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
// import { FaStar } from "react-icons/fa";

const BookDetailsModal = ({ setBookDetailsModal, id, BooksData }) => {

    let book = null;
    if (BooksData?.length !== 0) {
        book = BooksData?.find(book => book?.id === id);
    }
    console.log(BooksData);

    return (
        <>
            <section
                onClick={() => setBookDetailsModal(false)}
                className="absolute top-0 left-0 bottom-0 right-0 bg-green-300 dark:bg-gray-400 h-screen w-full  m-auto flex">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="book-details-modal m-auto relative h-[2/3] w-3/4 bg-white/80 rounded-2xl shadow-xl p-4">

                    <div className="modal-top flex items-center justify-between px-2 md:px-4 lg:px-8">
                        <h2 className="text-2xl text-green-500">Book Details</h2>
                        <div className="action-buttons flex items-center gap-4">
                            <span className="tooltip-container">
                                <FaRegHeart className="text-orange-400 cursor-pointer text-3xl" />
                                <span className="tooltip">Favourite</span>
                            </span>
                            <span
                                onClick={() => setBookDetailsModal(false)}
                                className="close cursor-pointer text-xl flex items-center border border-red-400/50 p-2 rounded-full hover:bg-red-500 bg-red-300/60 text-red-700 hover:text-white transition-all duration-300">
                                <RxCross1 />
                            </span>
                        </div>
                    </div>

                    <div className="modal-body mt-5 flex">
                        <div className="modal-left w-1/4 h-full flex items-center justify-center border">
                            <img
                                src={book?.imageUrl}
                                alt="book"
                                className="w-4/5 object-cover rounded-md hidden lg:block"
                            />
                        </div>
                        <div className="modal-right ml-5 w-3/4 h-full flex flex-col justify-between">
                            <h2 className="lg:text-xl text-[#090937]">{book?.bookName}</h2>
                            <p className="lg:text-lg">{book?.author}</p>
                            <p className="text-base">Category: {book?.category}</p>
                            <div className="flex items-center gap-2 my-2">
                                <span className="text-lg font-bold text-orange-400">{book?.rating}</span>
                                <span>|</span>
                                <span>{book?.publication}</span>
                            </div>
                            <p className="text-base">দাম: {book?.price} ৳</p>
                            <p>
                                <span className="text-2xl font-semibold">Book Summary:</span>
                                <p className="text-base leading-relaxed lg:max-h-36 overflow-y-auto p-4 border rounded">
                                    {book?.summery}
                                </p>
                            </p>

                            {/* buy now */}
                            <div className="buy-now self-start">
                                <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookDetailsModal