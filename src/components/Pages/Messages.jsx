// // import {
// //   collection,
// //   onSnapshot,
// //   query,
// //   orderBy,
// //   doc,
// //   deleteDoc,
// // } from "firebase/firestore";
// // import { auth, dbase } from "../Firebase";
// // import { Link } from "react-router-dom";
// // import { signOut } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// export const Messages = () => {
//   const [message, setMessages] = useState("message");
//   const [User, setUser] = useState("");

//   //   const User = auth.currentUser;

//   // const signout = () => {
//   //   signOut(auth);
//   //   window.location.href = "/";
//   // };

//   // useEffect(() => {
//   //   const unsubscribe = auth.onAuthStateChanged((user) => {
//   //     setUser(user);
//   //   });

//   //   return () => {
//   //     unsubscribe();
//   //   };
//   // }, []);

//   // useEffect(() => {
//   //   if (User) {
//   //     const fetchMessages = async () => {
//   //       const q = query(
//   //         collection(dbase, "messages"),
//   //         orderBy("createdAt", "desc")
//   //       );
//   //       onSnapshot(q, async (snapshot) => {
//   //         const messages = [];
//   //         for (const doc of snapshot.docs) {
//   //           const messageItem = { ...doc.data(), id: doc.id };
//   //           messageItem.formattedDate = formatDate(
//   //             messageItem.createdAt.toDate()
//   //           );
//   //           messages.push(messageItem);
//   //         }
//   //         setMessages(messages);
//   //       });
//   //     };

//   //     fetchMessages();
//   //   }
//   // }, [User]);

//   // // Helper function to format date
//   // const formatDate = (date) => {
//   //   const day = date.getDate();
//   //   const month = date.getMonth();
//   //   const monthName = [
//   //     "January",
//   //     "February",
//   //     "March",
//   //     "April",
//   //     "May",
//   //     "June",
//   //     "July",
//   //     "August",
//   //     "September",
//   //     "October",
//   //     "November",
//   //     "December",
//   //   ][month];
//   //   const year = date.getFullYear();
//   //   return `${day} ${monthName}, ${year}`;
//   // };

//   // const handleDeletePost = async (msgId) => {
//   //   const docRef = doc(dbase, "messages", msgId);
//   //   deleteDoc(docRef)
//   //     .then(() => {
//   //       alert("Document deleted successfully!");
//   //     })
//   //     .catch((error) => {
//   //       alert("Error deleting document: ", error);
//   //     });
//   // };

//   return (
//     <div className="w-full h-fit py-12 bg-tet">
//       <div className="MessagesWrapper w-4/6 mx-auto h-fit gap-4">
//         <div className="message-inner w-full h-fit rounded-md flex gap-3 flex-col">
//           <p className="text-primary text-center text-2xl font-medium mb-8">
//             Messages
//           </p>
//           <div className="messages w-full h-fit px-5 mb-5 py-4 bg-white rounded-md text-primary">
//             <h2 className=" text-wrap leading-2">Omoefe</h2>
//             <div className="sender text-xs">26, December, 2024</div>

//             <p className="postBody  whitespace-pre-wrap mt-2">
//               Goodday. This is a testing message for the contact form
//             </p>
//             <button
//               className="w-fit px-8 py-1 mt-4 rounded bg-red-400"
//               // onClick={() => handleDeletePost(message.id)}
//             >
//               Delete
//             </button>
//           </div>
//           <button
//             // onClick={signout}
//             id="SignBtn"
//             className="Signout-Btn button bg-red-500 rounded py-2 px-8 cursor-pointer self-center text-white w-fit text-nowrap mt-5"
//           >
//             SIGN OUT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
