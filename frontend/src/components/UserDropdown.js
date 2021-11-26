import React from "react";
import { Dropdown } from "react-bootstrap";

const UserDropDown = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" variant="secondary">
          Which location?
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-2">New york</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Berlin</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Lima</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default UserDropDown;
