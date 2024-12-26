import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../NonPages/FirebaseConfig";
import { BookForm } from "../Layouts/BookForm";

const AddBooks = () => {
  const [user, setUser] = useState(null); // Store the user state

  // Check if the user is authenticated
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update user state based on authentication status
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      window.location.href = "/";
    } catch (error) {
      console.log("Error signing out:", error.message);
    }
  };

  return (
    <div className="w-full min-h-screen py-20 flex items-center justify-center bg-gray-100">
      {user ? (
        <div className="w-full flex flex-col items-center gap-8">
          <BookForm />
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-tet py-2 px-8 rounded-full cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center gap-2">
          <p className="text-xl font-semibold text-red-500">
            You are not authenticated.
          </p>
          <a href="/" className="text-primary text-lg font-medium underline">
            Return to Home Page
          </a>
        </div>
      )}
    </div>
  );
};

export default AddBooks;
