import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Register = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [valid, setValid] = useState(false);
  const [error, setError] = useState("");

  const check = (e) => {
    setUserInput({ ...userInput, [e.currentTarget.id]: e.target.value });
    // userInput.name.length < 2
    //   ? (setError("name must be more then 2 charater"))
    //   : userInput.surname.length < 3
    //   ? setError("surname must be more then 2 charater")
    //   : userInput.password.length < 7 && userInput.password.match(/\d/)
    //   ? setError("password must contain a digit with minimum 8 charater")
    //   : userInput.password !== userInput.rePassword
    //   ? setError("password not match")
    //   : setValid(true);
    if (userInput.name.length < 2) {
      setError("name must be more then 2 charater");
      setValid(false);
    } else if (userInput.surname.length < 3) {
      setError("surname must be more then 2 charater");
      setValid(false);
    } else if (!validateEmail(userInput.email)) {
      setError("email format is not correct");
      setValid(false);
    } else if (
      userInput.password.length < 7 &&
      userInput.password.match(/\d/g) === null
    ) {
      setError("password must contain a digit with minimum 8 charater");
      setValid(false);
    } else if (userInput.password !== userInput.rePassword) {
      setError("password not match");
      setValid(false);
    } else {
      setValid(true);
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            value={userInput.name}
            onChange={(e) => check(e)}
            id="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            placeholder="surname"
            value={userInput.surname}
            onChange={(e) => check(e)}
            id="surname"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={userInput.email}
            onChange={(e) => check(e)}
            id="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={userInput.password}
            onChange={(e) => check(e)}
            id="password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Re-enter password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={userInput.rePassword}
            onChange={(e) => check(e)}
            id="rePassword"
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!valid}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
