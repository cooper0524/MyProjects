import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ProductForm from "./ProductForm";

function PopupMsg({ src, categories, doc, collection }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pt-3">
      <Button variant="primary" onClick={handleShow}>
        新增商品
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>新增商品</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm
            src={src}
            categories={categories}
            onCloseModal={handleClose}
            doc={doc}
            collection={collection}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PopupMsg;
