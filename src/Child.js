import * as React from "react";

import {
  useParams
} from "react-router-dom";

export default function Child() {
	let { id } = useParams();

      return(
      		<div>{id}</div>
      	);
}