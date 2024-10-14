import React from "react";
import "./WardList.css";
import Button from "@mui/material/Button";

const nameList = [
  { hospnum: 12345, surname: "SMITH" },
  { hospnum: 12345, surname: "JONES" },
  { hospnum: 12345, surname: "WILLIAMS" },
  { hospnum: 12345, surname: "TAYLOR" },
  { hospnum: 12345, surname: "BROWN" },
  { hospnum: 12345, surname: "DAVIES" },
  { hospnum: 12345, surname: "EVANS" },
  { hospnum: 12345, surname: "WILSON" },
  { hospnum: 12345, surname: "THOMAS" },
  { hospnum: 12345, surname: "JOHNSON" },
];

function WardList() {
  return (
    <div className="container">
      <h3>Ward 1</h3>
      <ul>
        {nameList.map((name, index) => (
          <li key={index}>
            <Button variant="outlined">
              {name.surname} {name.hospnum}
            </Button>
          </li>
        ))}
      </ul>

      <h3>Ward 2</h3>
      <ul>
        {nameList.map((name, index) => (
          <li key={index}>
            <Button variant="outlined">
              {name.surname} {name.hospnum}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WardList;
