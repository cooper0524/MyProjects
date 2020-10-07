import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import EditForm from "./EditForm";

function EditItem({ product, categories, title, doc, collection }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="btn btn-warning btn-sm "
        variant="primary"
        onClick={handleShow}
        data-toggle="modal"
      >
        {title}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm
            product={product}
            categories={categories}
            onCloseModal={handleClose}
            doc={doc}
            collection={collection}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditItem;
