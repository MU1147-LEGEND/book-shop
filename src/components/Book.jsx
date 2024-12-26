/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { TbTrashXFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";


const Book = ({ book, setBookDetailsModal, setId }) => {
    
    const handleOpenBookDetails = (id) => {
        setId(id);
        setBookDetailsModal(true);
    }

    console.log(book.id);

    return (

        <div className="book-container shadow-lg border-2 border-gray-400/20 rounded-xl lg:flex items-center lg:w-full lg:h-40 my-4 p-2 hover:shadow-2xl transition-all duration-300">
            {/* Image Section */}
            <div className="book p-2">
                <img
                    src={book?.imageUrl}
                    alt={book.bookName}
                    className="lg:h-28 object-cover mx-auto rounded-md pr-3"
                />
            </div>

            {/* Book Information Section */}
            <div className="book-info flex-1 flex flex-col justify-between overflow-hidden px-4">
                <div>
                    <h2 className="text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{book?.bookName}</h2>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap">{book?.author}</p>
                </div>

                <div className="flex items-center justify-between gap-3 my-2">
                    <div className="flex items-center space-x-1 text-sm">
                        <span className="flex items-center text-base">
                            {book.rating}&nbsp;<FaStar className="text-orange-400" />
                        </span>
                        <span>|</span>
                        <span className="whitespace-nowrap">{book.publication}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 text-xl">
                        <div className="flex space-x-4 text-xl">
                            <span className="tooltip-container">
                                <FaEdit className="text-orange-400 cursor-pointer" />
                                <span className="tooltip">Edit</span>
                            </span>
                            <span className="tooltip-container">
                                <FaRegHeart className="text-orange-400 cursor-pointer" />
                                <span className="tooltip">Favourite</span>
                            </span>
                            <span className="tooltip-container">
                                <TbTrashXFilled className="text-red-600 cursor-pointer" />
                                <span className="tooltip">Delete</span>
                            </span>
                        </div>

                    </div>
                </div>

                {/* Price and Details Button */}
                <div className="price-buy flex flex-col lg:flex-row justify-between items-center mt-2">
                    <span className="text-2xl text-green-500 font-bold">
                        {book.price} ৳
                    </span>
                    <button
                        onClick={() => handleOpenBookDetails(book.id)}
                        className="bg-green-500 text-white py-1.5 px-2.5 lg:px-5 rounded-lg hover:bg-green-700 transition duration-300 w-full lg:w-1/2 mt-4 lg:mt-0">
                        Details
                    </button>
                </div>
            </div>
        </div>


    )

}

export default Book