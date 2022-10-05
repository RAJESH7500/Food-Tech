import { Fragment, useState } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";

const CommentForm = ({ dishId, postComment }) => {
  const [isModelOpen, setModelOpen] = useState(false);
  const handelSubmit = (value) => {
    console.log("currennt state " + JSON.stringify(value));
    // alert("current state is " + JSON.stringify(value));
    setModelOpen(!isModelOpen);
    console.log("dish isd is ", dishId);
    postComment(dishId, value.rating, value.author, value.comment);
  };
  const required = (val) => val && val.length; //value > 0
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  return (
    <Fragment>
      <Button outline onClick={() => setModelOpen(!isModelOpen)}>
        <span className="fa fa-edit fa-lg">Add Comment</span>
      </Button>

      <Modal isOpen={isModelOpen} toggle={() => setModelOpen(!isModelOpen)}>
        <ModalHeader toggle={() => setModelOpen(!isModelOpen)}>
          Submit Comment
        </ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(e) => handelSubmit(e)}>
            <Row className="form-group">
              <Label htmlFor="rating" md={12}>
                Rating
              </Label>
              <Col md={12}>
                <Control.select
                  model=".rating"
                  className="form-control"
                  name="rating"
                  id="rating"
                  validators={{
                    required,
                  }}
                >
                  <option>selsect</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".rating"
                  show="touched"
                  messages={{ required: "required" }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="author" md={12}>
                {" "}
                Your Name{" "}
              </Label>
              <Col md={12}>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment" md={12}>
                Comment
              </Label>
              <Col md={12}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="6"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".comment"
                  show="touched"
                  messages={{
                    required: "Required",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default CommentForm;
