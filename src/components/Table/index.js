import React from "react";
import styled from "styled-components";

import "../../App.css";

const TableSection = () => {
  const Title = styled.h1`
    color: #00c389;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    cursor: pointer;
    // text-align: center;
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  `;
  return (
    <>
      <Title>Server Specs</Title>

      <table>
        <tr>
          <th>Server Name</th>
          <td>Asgard</td>
        </tr>
        <tr>
          <th>CPU</th>
          <td>4 cores (8 soon)</td>
        </tr>
        <tr>
          <th>RAM</th>
          <td>16 GB</td>
        </tr>
        <tr>
          <th>Bandwidth</th>
          <td>1 Gbps (2 soon)</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>Strasbourg</td>
        </tr>
        {/* <tr>
          <th>Validator Address</th>
          <td>
            rv1qgfmskllt5lj2l2q2crgat6ml4t9u0n36phxevv3qy9yegxapdxnjgnqsuh
          </td>
        </tr> */}
      </table>
      {/* <p>rv1qgfmskllt5lj2l2q2crgat6ml4t9u0n36phxevv3qy9yegxapdxnjgnqsuh</p> */}
    </>
  );
};

export default TableSection;
