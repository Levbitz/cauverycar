import React, { useState, useEffect } from "react";
import { db, storage } from "../../lib/Firebase/firebase";
import { Link, useNavigate, Navigate } from "react-router-dom";

import {
  addDoc,
  arrayUnion,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import AdminNav from "../../components/AdminNavbar/AdminNav";
import Footer from "../../components/Footer/Footer";
//import { useGlobalContext } from "../../lib/context/GlobalContext/GlobalContext";
//import NavbarWrap from "../../components/Navbar/NavbarWrap";

function PhotoUpload() {
  // const { closeSubmenu } = useGlobalContext();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [result, setResult] = useState([]);
  const [myPreview, setMyPreview] = useState([]);
  //const [identifier, setIdentifier] = useState([]);
  const [activation, setActivation] = useState(false);

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [bodyType, setBodyType] = useState("");

  const [fuelType, setFuelType] = useState("");
  const [ownerType, setOwnerType] = useState("");

  const [transmissionType, setTransmissionType] = useState("");
  const [kmDriven, setKmDriven] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [priceType, setPriceType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numberPlate, setNumberPlate] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const onChangeHandler = async (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      const newImage = event.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }

    const filesArray = Array.from(event.target.files).map((file, index) =>
      URL.createObjectURL(file, index)
    );

    setMyPreview((prevImages) => prevImages.concat(filesArray));
    Array.from(event.target.files).map(
      (file, index) => URL.revokeObjectURL(file, index) // avoid memory leak
    );
  };

  //console.log(images.length);
  //console.log(myPreview);

  const handleUpload = async () => {
    setUploading(true);
    const docRef = await addDoc(collection(db, "ads"), {
      createdAt: serverTimestamp(),
      active: false,
      promotionType: "normal",
      category: category,
      subcategory: subcategory,
      state: state,
      city: city,
      address: address,
      bodyType: bodyType,
      fuelType: fuelType,
      transmissionType: transmissionType,
      priceType: priceType,
      kmDriven: kmDriven,
      numberPlate: numberPlate,
      ownerType: ownerType,

      phoneNumber: phoneNumber,
      price: price,
      title: title,
      description: description,
      email: email,
      userName: userName,
    });
    await Promise.all(
      images.map(async (file) => {
        const fileRef = ref(storage, `photos/${docRef.id}/${file.name}`);
        const uploadTask = uploadBytes(fileRef, file, "data_url").then(
          async () => {
            const downloadURL = await getDownloadURL(fileRef);

            await updateDoc(doc(db, "ads", docRef.id), {
              images: arrayUnion(downloadURL),
            });
            // await setIdentifier(docRef.id);
            await setActivation(true);
            await setUploading(false);
            await localStorage.removeItem("data");
            await navigate(`/promote/${docRef.id}`);
          }
        );
      })
    );
  };

  const renderPhotos = (source) => {
    if (source != null) {
      return source.map((photo, index) => {
        // console.log(index);
        return (
          <div className="col l2 s6" key={photo.id}>
            <p>{photo.id}</p>

            <img
              width={"100%"}
              style={{
                objectFit: "contain",
              }}
              className="responsive-image"
              src={photo}
              alt=""
            />

            {/*<button
              onClick={() => {
                //delete and update fileList
                setImages((prevState) =>
                  prevState.filter((item) => item.id !== photo.id)
                );
                setMyPreview((prevState) =>
                  prevState.filter((item) => item !== photo)
                );
              }}
            >
              delete
            </button>*/}
          </div>
        );
      });
    } else {
      return null;
    }
  };

  const navigation = useNavigate();
  useEffect(() => {
    //getData();
    const data = JSON.parse(localStorage.getItem("data"));

    console.log(data);

    if (data) {
      data.map((item) => {
        setResult([...result, item]);

        setCategory(item.category);
        setSubcategory(item.subcategory);
        setState(item.state);
        setCity(item.city);
        setAddress(item.address);
        setBodyType(item.bodyType);
        setFuelType(item.fuelType);
        setKmDriven(item.kmDriven);
        setTransmissionType(item.transmissionType);
        setPriceType(item.priceType);
        setFuelType(item.fuelType);
        setKmDriven(item.kmDriven);
        setOwnerType(item.ownerType);
        setNumberPlate(item.numberPlate);
        setPhoneNumber(item.phoneNumber);
        setPrice(item.price);
        setTitle(item.title);
        setDescription(item.description);
        setEmail(item.email);
        setUserName(item.userName);
      });
    } else {
      setResult([]);
      // navigation("/post_ad");
      // alert("no resati");
    }
    //setResult(data);
  }, []);

  useEffect(() => {
    setImages(images);
    setMyPreview(myPreview);
  }, [images, myPreview]);
  return (
    <>
      <AdminNav />
      <div>
        <div className="container">
          <div
            style={{
              marginTop: "50px",
            }}
            className="row"
          >
            <div className="col l4 s12">
              <div
                style={{
                  marginTop: 100,
                }}
              >
                <label className="btn" htmlFor="upload">
                  Click Upload Photos
                </label>
                <input
                  className="btn"
                  type="file"
                  name="upload"
                  id="upload"
                  style={{ display: "none" }}
                  placeholder="hffhfhhf"
                  multiple
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="col l8 s12">
              <div>
                <small className="right red-text">
                  {" "}
                  *minimum should be 3 images
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div
              style={{
                padding: "10px",
                borderWidth: 2,
                borderRadius: 2,
                borderColor: "#eeeeee",
                borderStyle: "dashed",
                backgroundColor: "#fafafa",
                color: "#bdbdbd",
                outline: "none",
                transition: "border .24s ease-in-out",
                width: "100%",
                height: "300px",
                marginTop: "10px",
                borderRadius: "30px",
              }}
            >
              <div className="result">{renderPhotos(myPreview)}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col l4">
                {images.length > 2 ? (
                  activation ? null : (
                    <div onClick={handleUpload}>
                      {uploading ? (
                        <>
                          <button
                            class="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                          >
                            uploading...
                            <i class="material-icons right">
                              <div class="preloader-wrapper small active">
                                <div class="spinner-layer spinner-red-only">
                                  <div class="circle-clipper left">
                                    <div class="circle"></div>
                                  </div>
                                  <div class="gap-patch">
                                    <div class="circle"></div>
                                  </div>
                                  <div class="circle-clipper right">
                                    <div class="circle"></div>
                                  </div>
                                </div>
                              </div>
                            </i>
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="btn">continue</button>
                        </>
                      )}
                    </div>
                  )
                ) : null}
              </div>
            </div>
          </div>

          <div className="container">
            {/*result ? (
              <div
                style={{
                  marginBottom: "50px",
                }}
              >
                <h6>Add Details</h6>
                <div className="row">
                  <div className="col l2 s3">
                    <div
                      style={{
                        border: "1px solid indigo",
                        borderRadius: "5px",
                      }}
                    >
                      <h1
                        style={{
                          color: "indigo",
                          fontSize: "15px",
                          margin: "0",
                          padding: "0",
                        }}
                        className="center"
                      >
                        {category}
                      </h1>
                    </div>
                  </div>
                  <div className="col l2 s6">
                    <div
                      style={{
                        border: "1px solid indigo",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        style={{
                          color: "indigo",
                          fontSize: "15px",
                          margin: "0",
                          padding: "0",
                        }}
                        className="center"
                      >
                        {subcategory}
                      </p>
                    </div>
                  </div>
                  <div className="col l2 s3">
                    <div
                      style={{
                        border: "1px solid indigo",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        style={{
                          color: "indigo",
                          fontSize: "15px",
                          margin: "0",
                          padding: "0",
                        }}
                        className="center"
                      >
                        {state}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col l12">
                    <p>Price type {priceType}</p>
                    <small>Town</small>
                    <p>{city}</p>
                    <small>address</small>
                    <p>{address}</p>
                    <small>phone number</small>
                    <p>{phoneNumber}</p>
                    <small>price</small>

                    <p>{price}</p>
                    <small>title</small>
                    <p>{title}</p>
                    <small>description</small>
                    <p>{description}</p>
                    <small>email</small>
                    <p>{email}</p>
                    <small>user</small>
                    <p>{userName}</p>
                    <p>{fuelType}</p>
                    <p>{bodyType}</p>
                    <p>{transmissionType}</p>
                    <p>{kmDriven}</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )*/}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PhotoUpload;

// import React, { useEffect, useState, useMemo } from "react";
// import { useDropzone } from "react-dropzone";
// import { db, storage } from "../../lib/Firebase/firebase";
// // import DummyImg from "../../assets/images/1.png";
// //import Navbar from "../../components/Navbar/Navbar";
// //import InputsShowCase from "../../components/InputsShowCase/InputsShowCase";
// import {
//   addDoc,
//   arrayUnion,
//   collection,
//   serverTimestamp,
//   updateDoc,
//   doc,
// } from "firebase/firestore";
// import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
// import { Link } from "react-router-dom";

// function PhotoUpload(props) {
//   const [files, setFiles] = useState([]);
//   const [result, setResult] = useState([]);
//   const [activation, setActivation] = useState(false);
//   const [identifier, setIdentifier] = useState("");
//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject,
//     acceptedFiles,
//     open,
//   } = useDropzone({
//     accept: "image/*",
//     noClick: true,
//     noKeyboard: true,
//     onDrop: (acceptedFiles) => {
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           })
//         )
//       );
//     },
//   });

//   const style = useMemo(
//     () => ({
//       ...baseStyle,
//       ...(isDragActive ? activeStyle : {}),
//       ...(isDragAccept ? acceptStyle : {}),
//       ...(isDragReject ? rejectStyle : {}),
//     }),
//     [isDragActive, isDragReject]
//   );

//   const thumbs = files.map((file, i) => (
//     <div className="col l2 s6" key={file.name}>
//       <img className="responsive-img" src={file.preview} />
//     </div>
//   ));

//   useEffect(() => {
//     // Make sure to revoke the data uris to avoid memory leaks
//     files.forEach((file) => URL.revokeObjectURL(file.preview));
//   }, [files]);

//   const filepath = acceptedFiles.map((file) => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   // const [service, setService] = useState("");
//   // const [city, setCity] = useState("");
//   // const [address, setAddress] = useState("");
//   // const [pinArea, setPinArea] = useState("");
//   // const [description, setDescription] = useState("");
//   // const [title, setTitle] = useState("");
//   // const [age, setAge] = useState("");
//   // const [neighbour, setNeighbour] = useState("");
//   // const [phoneNumber, setPhoneNumber] = useState("");
//   const [category, setCategory] = useState("");
//   const [subcategory, setSubcategory] = useState("");
//   const [district, setDistrict] = useState("");
//   const [address, setAddress] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [price, setPrice] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const [email, setEmail] = useState("");
//   useEffect(() => {
//     //getData();
//     const data = JSON.parse(localStorage.getItem("data"));
//     data.map((item) => {
//       setResult([...result, item]);
//       setCategory(item.category);
//       setSubcategory(item.subcategory);
//       setDistrict(item.district);
//       setAddress(item.address);
//       setPhoneNumber(item.phoneNumber);
//       setPrice(item.price);
//       setTitle(item.title);
//       setDescription(item.description);
//       setEmail(item.email);

//       // setTitle(item.title);
//       // setAge(item.age);
//       // setNeighbour(item.neighbour);
//       // setPhoneNumber(item.phoneNumber);
//       // setService(item.service);
//       // setCity(item.city);
//       // setAddress(item.address);
//       // setPinArea(item.pinArea);
//       // setDescription(item.description);
//       // setEmail(item.email);
//     });
//     //setResult(data);
//   }, []);

//   // console.log(title);
//   // console.log(result);

//   const uploadHandler = async () => {
//     setUploading(true);
//     const docRef = await addDoc(collection(db, "photos"), {
//       createdAt: serverTimestamp(),
//       active: false,
//       promotionType: "normal",
//       // title: title,
//       // age: age,
//       // neighbour: neighbour,
//       // phoneNumber: phoneNumber,
//       // service: service,
//       // city: city,
//       // address: address,
//       // emailId: email,
//       // description: description,
//     });
//     await Promise.all(
//       files.map(async (file) => {
//         const fileRef = ref(storage, `photos/${docRef.id}/${file.name}`);
//         const uploadTask = uploadBytes(fileRef, file, "data_url").then(
//           async () => {
//             const downloadURL = await getDownloadURL(fileRef);

//             await updateDoc(doc(db, "photos", docRef.id), {
//               images: arrayUnion(downloadURL),
//             });
//             await setIdentifier(docRef.id);
//             await setActivation(true);
//             setUploading(false);
//           }
//         );
//       })
//     );
//   };

//   console.log(thumbs);

//   console.log(identifier);

//   return (
//     <>
//       <div
//         style={{
//           background: "#F4F4F4",
//         }}
//       >
//         {/*<div className="container">
//           <Navbar />
//           <InputsShowCase />
//       </div>*/}
//       </div>

//       <div className="container">
//         {result ? (
//           <div
//             style={{
//               marginBottom: "50px",
//             }}
//           >
//             <h6>Add Details</h6>
//             <p>
//               <span>{category}</span>
//               ==
//               <span>{subcategory}years</span>
//               ==
//               <span>{district}</span>
//               ==
//               <span>{address}</span>
//               ==
//               <span>{phoneNumber}</span>
//             </p>
//             <p>{title}</p>
//             <small>{description}</small>*
//           </div>
//         ) : (
//           ""
//         )}
//       </div>

//       <div className="container">
//         <div {...getRootProps({ style })}>
//           <input {...getInputProps()} />
//           {/*<p>Drag 'n' drop some files here</p>*/}
//           <button
//             style={{
//               height: "40px",
//               fontSize: "12px",
//               marginTop: "10px",
//               fontWeight: "bold",
//             }}
//             className="btn red"
//             type="button"
//             onClick={open}
//           >
//             Uplaod Images
//           </button>
//         </div>

//         <aside>
//           <p>File Preview</p>
//           <div className="row">
//             <div
//               style={{
//                 borderWidth: 2,
//                 borderRadius: 2,
//                 borderColor: "#eeeeee",
//                 borderStyle: "dashed",
//                 backgroundColor: "#fafafa",
//                 color: "#bdbdbd",
//                 outline: "none",
//               }}
//               className="col l9 s12 "
//             >
//               <div>
//                 <aside>{thumbs}</aside>
//               </div>

//               {/*<aside style={thumbsContainer}>{thumbs}</aside>*/}
//             </div>
//             <div className="col l3 s12">
//               <small
//                 style={{
//                   padding: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 {filepath}
//               </small>
//             </div>
//           </div>
//         </aside>
//       </div>

//       <div className="container">
//         <div className="row">
//           <div className="col l4">
//             {files.length > 0 ? (
//               activation ? null : (
//                 <>
//                   <button onClick={uploadHandler} className="btn">
//                     {uploading ? "Uploading" : "continue"}
//                   </button>
//                 </>
//               )
//             ) : null}
//           </div>
//           <div className="col l4">
//             <div className="row">
//               <div className="col l6">
//                 <div>
//                   {activation ? (
//                     <Link
//                       to="/profile"
//                       style={{
//                         fontSize: "12px",
//                       }}
//                       className="btn red"
//                     >
//                       Activate Later
//                     </Link>
//                   ) : null}
//                 </div>
//               </div>
//               <div className="col l6">
//                 <div>
//                   {activation ? (
//                     <Link to={`/promote/${identifier}`} className="btn">
//                       Activate Now
//                     </Link>
//                   ) : null}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PhotoUpload;

// const baseStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "10px",
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: "#eeeeee",
//   borderStyle: "dashed",
//   backgroundColor: "#fafafa",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out",
//   width: "100%",
//   height: "100px",
//   marginTop: "10px",
// };

// const activeStyle = {
//   borderColor: "#2196f3",
// };

// const acceptStyle = {
//   borderColor: "#00e676",
// };

// const rejectStyle = {
//   borderColor: "#ff1744",
// };

// const thumbsContainer = {
//   // display: "flex",
//   // flexDirection: "row",
//   // flexWrap: "wrap",
//   // marginTop: 16,
// };

// const thumb = {
//   display: "inline-flex",
//   borderRadius: 2,
//   border: "1px solid #eaeaea",
//   marginBottom: 8,
//   marginRight: 8,
//   width: "auto",
//   height: 200,
//   padding: 4,
//   boxSizing: "border-box",
// };

// const thumbInner = {
//   display: "flex",
//   minWidth: 0,
//   overflow: "hidden",
// };

// const img = {
//   display: "block",
//   width: "auto",
//   height: "100%",
// };
