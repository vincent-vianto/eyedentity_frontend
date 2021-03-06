import React from "react";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import "./Addpage.css";
import { editProfile,saveHide } from "../../actioncreators/Home";
import {
  ModalTitle,
  ModalBody,
  ModalFooter,
  Modal,
  Button,
} from "react-bootstrap";
import { showSuccess} from "../../actioncreators/Home";

const Edit = (props) => {
  const [isShow, setIsShow] = React.useState(false);

  const handleSave = () => setIsShow(false)

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: "",
            about: "",
            image: null,
            backGroundImage: null,
          }}
          onSubmit={(values) => {
            let formData = new FormData();

            formData.set("name", values.name);
            formData.set("about", values.about);
            formData.append("image", values.image);
            formData.append("backGroundImage", values.backGroundImage);
            props.editProfile(formData);
            props.onHide(false)
            props.showSuccess("Succesfully changed")
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={props.handleChange}
                  value={props.values.name}
                />
              </div>
              <div className="form-group">
                <label>Status Message</label>
                <input
                  type="text-area"
                  className="form-control"
                  id="about"
                  name="about"
                  onChange={props.handleChange}
                  value={props.values.about}
                />
              </div>
              <div className="form-group">
                <label>Photo Profile</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  onChange={(event) => {
                    props.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Profile Background </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  name="backGroundImage"
                  onChange={(event) => {
                    props.setFieldValue(
                      "backGroundImage",
                      event.currentTarget.files[0]
                    );
                  }}
                />
              </div>
              <div className="settingsave">
                <button
                  type="submit"
                  className="btn text-light btn-block"
                  onSubmit={handleSave}
                >
                  Save Changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};



const mapDispatchToProps = { editProfile: editProfile,saveHide : saveHide, showSuccess : showSuccess };

export default connect(null, mapDispatchToProps)(Edit);
