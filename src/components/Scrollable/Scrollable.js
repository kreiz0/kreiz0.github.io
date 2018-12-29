import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { HowWeAreWorking } from "../../components/HowWeAreWorking/HowWeAreWorking";
import { TeamMembers } from "../TeamMembers/TeamMembers";
import employees from "../../assets/employees";
import vacancy from "../../assets/vacancy";
import photo from "../../assets/photo";

export class Scrollable extends PureComponent {
  static propTypes = {
    selectedId: PropTypes.string,
    onSectionChange: PropTypes.func,
    scrollToBlock: PropTypes.func.isRequired,
    selectedSectionIndex: PropTypes.number,
    transitionEnd: PropTypes.bool,
  };

  componentDidUpdate({ transitionEnd: prevTransitionEnd }, prevState) {
    const { transitionEnd, scrollToBlock, selectedSectionIndex } = this.props;
    if (prevTransitionEnd !== transitionEnd && transitionEnd) {
      scrollToBlock(selectedSectionIndex, true);
    }
  }

  render() {
    const { selectedId, onSectionChange } = this.props;

    return (
      <>
        <TeamMembers
          selectedId={selectedId}
          id="employees"
          items={employees}
          onSectionChange={onSectionChange}
        />
        <TeamMembers selectedId={selectedId} id="vacancy" items={vacancy} />
        <TeamMembers id="process" selectedId={selectedId}>
          <HowWeAreWorking />
        </TeamMembers>
        <TeamMembers selectedId={selectedId} id="photo" items={photo} />
      </>
    );
  }
}
