import React from "react";
import {Formik,Form} from 'formik'
import "./Add.css";
import { connect } from "react-redux";
import {addComment} from "../../actioncreators/comment";
import { config } from "@fortawesome/fontawesome-svg-core";
// import {Form} from 'react-bootstrap'


const comment = (props) => {
  

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;  
  
  console.log(props.data._id);
  console.log(id);
  
  
  
  return (
      <Formik
        initialValues={{
          targetPostId: props.data._id,
          userId : id,
          commentText : '',
        }}
        onSubmit ={(values,action)=>{

          props.addComment(values);
          action.resetForm()
        }}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <div>
              <div className="form-group">
                <textarea
                className="form-control"
                id="commentText"
                name="commentText"
                rows={2}
                style={{ resize: "none" }}
                value={props.values.commentText}
                placeholder="Comment"
                onChange={props.handleChange}
              />
              </div>
              <button type="submit" className="btn text-light">
                Comment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }

const mapDispatchToProps = { addComment: addComment };

export default connect(null, mapDispatchToProps)(comment);
