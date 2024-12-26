import { useState } from "react";
import { dbase, storage } from "../NonPages/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const BookForm = () => {
  const [formData, setFormData] = useState({
    description: "",
    price: "",
    link: "",
    cover: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.cover ||
      !formData.description ||
      !formData.price ||
      !formData.link
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `books/${formData.cover.name}`);
      await uploadBytes(storageRef, formData.cover);
      const coverUrl = await getDownloadURL(storageRef);

      // Add book data to Firestore
      await addDoc(collection(dbase, "books"), {
        description: formData.description,
        price: formData.price,
        link: formData.link,
        cover: coverUrl,
      });

      alert("Book added successfully!");
      setFormData({ description: "", price: "", link: "", cover: null });
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-tet py-10 flex justify-center">
      <form
        className="w-11/12 lg:w-6/12 bg-white px-4 py-10 rounded-md shadow-md flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold text-primary text-center">
          Add a New Book
        </h2>
        <input
          type="file"
          name="cover"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 rounded outline-none bg-tet text-primary"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Book description"
          className="border p-2 rounded resize-none outline-none bg-tet text-primary"
          rows="4"
          required
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (e.g., 3000)"
          className="border p-2 rounded outline-none bg-tet text-primary"
          required
        />
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Link to payment page"
          className="border p-2 rounded outline-none bg-tet text-primary"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-sec text-primary rounded font-medium"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};
