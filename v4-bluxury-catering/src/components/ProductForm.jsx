import React, { useState } from "react";
import CustomField from "../common/CustomField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import BootForm from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import firebase, { storage } from "../services/firebase";

const ProductForm = ({ src, categories, onCloseModal, doc, collection }) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(src);
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [price, setPrice] = useState("");
  const [xPrice, setXPrice] = useState("");
  const [desc, setDesc] = useState("");

  var randomNum = 1 + Math.random() * (1000 - 1);
  const handleImgDisplay = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const imgRef = image.name + randomNum;
    const uploadTask = storage.ref(`images/${imgRef}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(imgRef)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  const handleSubmit = () => {
    if (title.trim() === "") {
      alert("?");
    } else {
      const editTime = firebase.firestore.Timestamp.fromDate(
        new Date()
      ).toDate();
      firebase
        .firestore()
        .collection("products")
        .doc(doc)
        .collection(collection)
        .doc(editTime.toString())
        .set({
          title,
          category,
          price,
          xPrice,
          url,
          editTime,
          desc,
        })
        .then(onCloseModal);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("First Name is required"),
    category: Yup.string().required("Email is required"),
    price: Yup.string().required("Password is required"),
    xPrice: Yup.string(),
  });

  const initialValues = {
    title: title,
    category: category,
    price: price,
    xPrice: xPrice,
  };

  return (
    <div>
      <section id="productForm">
        <progress id="progress" value={progress} max="100" />
        <BootForm>
          <img
            className="d-flex m-auto"
            src={url}
            alt="productImg"
            height="200px"
            width="100%"
          />
          <BootForm.File
            id="exampleFormControlFile1"
            label="選取圖片"
            onChange={handleImgDisplay}
          />
          <div className="d-flex justify-content-center pt-2">
            {image ? (
              <Button variant="danger" type="button" onClick={handleUpload}>
                新增
              </Button>
            ) : (
              <Button
                variant="danger"
                type="button"
                onClick={handleUpload}
                disabled
              >
                新增
              </Button>
            )}
          </div>
        </BootForm>
      </section>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <CustomField
              label="產品名稱"
              name="title"
              errors={errors.title}
              touched={touched.title}
              onKeyUp={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="form-group text-left">
              <label htmlFor="category">產品類別</label>
              <Field
                as="select"
                label="產品類別"
                name="category"
                onBlur={(e) => {
                  setCategory(e.target.value);
                }}
                className={
                  "form-control" +
                  (errors.category && touched.category ? " is-invalid" : "")
                }
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Field>

              <ErrorMessage
                name="category"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <CustomField
              label="定價"
              name="price"
              errors={errors.price}
              touched={touched.price}
              onKeyUp={(e) => {
                setPrice(e.target.value);
              }}
            />
            <CustomField
              label="特價"
              name="xPrice"
              placeholder="無特價請空白"
              errors={errors.xPrice}
              touched={touched.xPrice}
              onKeyUp={(e) => {
                setXPrice(e.target.value);
              }}
            />
            <CustomField
              component="textarea"
              label="商品介紹"
              name="desc"
              errors={errors.desc}
              touched={touched.desc}
              onKeyUp={(e) => {
                setDesc(e.target.value);
              }}
            />

            <Button variant="primary" type="submit" value="Submit" block>
              新增
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
