import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const PageForm = () => {
  return (
    <>
      <div className="spacer" id="forms-component">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1 className="title font-bold">Book Now</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md="12">
            <Form className="row">
              <FormGroup className="col-md-6">
                <Label htmlFor="name">First Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter First Name"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label htmlFor="email">Last Name</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Last Name"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label htmlFor="password">Email</Label>
                <Input
                  type="email"
                  className="form-control"
                  id="password"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label htmlFor="confirmpwd">Phone</Label>
                <Input
                  type="number"
                  className="form-control"
                  id="confirmpwd"
                  placeholder="Mobile"
                />
              </FormGroup>

              <Col md="12" style={{ marginTop: "20px" }}>
                <Button
                  type="submit"
                  className="btn btn-success waves-effect waves-light m-r-10"
                >
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageForm;
