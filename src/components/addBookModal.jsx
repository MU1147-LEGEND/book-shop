/* eslint-disable react/prop-types */
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";


const AddBookModal = ({ setIsModalOpen, setBooksData }) => {
    const [bookName, setBookName] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [publication, setPublication] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [summery, setSummery] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const addBook = (e) => {
        e.preventDefault();
        const newBook = {
            bookName,
            author,
            rating,
            publication,
            category,
            price,
            summery,
            imageUrl,
        }
        setBooksData((prev) => [newBook, ...prev]);
        setIsModalOpen(false);
    }

    const validateForm = () => {
        return bookName && author && rating && publication && category && price && summery && imageUrl;
    }

    return (
        <section className="absolute top-0 right-0 bottom-0 left-0 bg-black/40 dark:bg-black/65 md:h-auto h-[120%]">
            <div
                onClick={() => { setIsModalOpen(false) }}
                className="modal h-full inset-0 z-50">
                {/* modal content */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="modal-content bg-white dark:bg-gray-300 w-[90%] lg:w-3/4 h-screen lg:h-3/4 m-auto p-5 mt-10 relative">
                    <div className="modal-header flex justify-between items-center">
                        <h2 className="text-2xl">Add Book</h2>
                        <span
                            onClick={() => setIsModalOpen(false)}
                            className="close cursor-pointer text-2xl flex items-center border border-red-400/50 p-2 absolute top-4 right-5 rounded-full hover:bg-red-500 bg-red-300/60 text-red-700 hover:text-white transition-all duration-300">
                            <RxCross1 />
                        </span>
                    </div>
                    <div className="modal-body mt-5">
                        <form
                            onSubmit={validateForm() ? addBook : (e) => e.preventDefault()}
                            className="lg:grid gap-x-5 lg:grid-cols-2">
                            <div className="form-group mb-5">
                                <label htmlFor="title" className="text-lg">Title</label>
                                <input
                                    onChange={(e) => setBookName(e.target.value)}
                                    value={bookName}
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter Book Title"
                                    className="py-2 px-3 border border-gray-300 dark:bg-gray-300 dark:border-white" />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="author" className="text-lg">Author</label>
                                <input
                                    onChange={(e) => setAuthor(e.target.value)}
                                    value={author}
                                    type="text"
                                    name="author"
                                    id="author"
                                    placeholder="Enter Author Name"
                                    className="py-2 px-3 border border-gray-300 dark:bg-gray-300 dark:border-white" />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="rating">Rating</label>
                                <input
                                    onChange={(e) => setRating(e.target.value)}
                                    value={rating}
                                    type="text"
                                    name="rating"
                                    id="rating"
                                    placeholder="Enter Rating"
                                    className="py-2 px-3 border border-gray-300 dark:bg-gray-300 dark:border-white" />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="rating">Publication</label>
                                <input
                                    onChange={(e) => setPublication(e.target.value)}
                                    value={publication}
                                    type="text"
                                    name="publication"
                                    id="publication"
                                    placeholder="Enter Publication"
                                    className="py-2 px-3 border border-gray-300 dark:bg-gray-300 dark:border-white" />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="category" className="text-lg">Category</label>
                                <input
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category}
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter Category"
                                    className="py-2 px-3 border border-gray-300 dark:bg-gray-300 dark:border-white" />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="price" className="text-lg">Price</label>
                                <input
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Enter Price"
                                    className="py-2 px-3 border border-gray-300 dark:bg-gray-300 dark:border-white" />
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="summery" className="text-lg">Book Summery</label>
                                <textarea
                                    onChange={(e) => setSummery(e.target.value)}
                                    value={summery}
                                    name="summery"
                                    id="summery"
                                    cols="30" rows="2"
                                    placeholder="Enter Summery"
                                    className="py-2 px-3 border border-gray-300 dark:bg-gray-300 dark:border-white">
                                </textarea>
                            </div>
                            <div className="form-group mb-5">
                                <label htmlFor="cover" className="text-lg">Cover</label>
                                <input
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    value={imageUrl}
                                    type="url"
                                    name="cover"
                                    id="cover"
                                    placeholder="Cover image URL"
                                    className="py-2 px-3 border border-gray-300 dark:bg-gray-300 dark:border-white" />
                            </div>
                            <div className="form-group col-span-2">
                                <button className="bg-green-500 text-white py-2 px-3 rounded-lg">Add Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddBookModal