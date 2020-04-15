import React from "react";
import { useFormik } from "formik";
import Axios from "axios";
import { Card,Form,Button } from "react-bootstrap";
import Logo from './logo.jpg'

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      born: "",
      died: "",
      description: "",
      establishment: "",
      imgurl: "",
    },

    onSubmit: (values, actions) => {
      Axios.post("http://localhost:3001/heroes", {
        values,
      }).then((res) => {
        window.alert("success");
        actions.setSubmitting(false);
        actions.resetForm();
      });
    },
  });
  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Required";
    } else if (!values.description) {
      errors.description = "Required";
    } else {
      return errors;
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={Logo} />
  <Card.Body>
  <form onSubmit={formik.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Control name="fullname"
              type="text"
              placeholder="Fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
            />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control name="born"
              type="text"
              placeholder="Born"
              onChange={formik.handleChange}
              value={formik.values.born}
            />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control name="died"
              type="text"
              placeholder="died"
              onChange={formik.handleChange}
              value={formik.values.died}
            />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control name="description"
              type="text"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control name="establishment"
              type="text"
              placeholder="Estabilishment"
              onChange={formik.handleChange}
              value={formik.values.establishment}
            />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control name="imgurl"
              type="text"
              placeholder="imageURL"
              onChange={formik.handleChange}
              value={formik.values.imgurl}
            />
  </Form.Group>
            
            
            <Button variant="outline-primary" type="submit">Add Hero</Button>
          </form>
  </Card.Body>
</Card>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
