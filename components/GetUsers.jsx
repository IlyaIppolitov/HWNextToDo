import { useState } from "react";
import FetchUsers from "./FetchUsers";

export default function GetUsers() {
  return <>
    <table>
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company name</th>
      </tr>
      {<FetchUsers/>} 
    </table>
  </>
}