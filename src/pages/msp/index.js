import React, { Component } from "react";

import { Header } from "../../components/PortfolioLongread/Header";
import { getProject } from "../../routes";

class Msp extends Component {
  render() {
    const msp = getProject("msp");

    return (
      <div>
        <Header project={msp} />
      </div>
    );
  }
}

export default Msp;
