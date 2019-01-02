import React, { PureComponent } from "react";
import Responsive from "react-responsive";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { Scrollable } from "../../components/Scrollable/Scrollable";
import { getRouteByLocation, sectionsFromAdditionalMenu } from "../../routes";
import { JobsCard } from "../../components/JobsCard/JobsCard";
import styles from "../../styles/jobs";

export class Jobs extends PureComponent {
  render() {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);
    const sections = sectionsFromAdditionalMenu(currentRoute.additionalMenu);

    return (
      <MainLayoutConsumer>
        {({
          selectedSectionIndex,
          onSectionChange,
          onScrollableRef,
          onLeftSideSectionRef,
          scrollToBlock,
          transitionEnd,
          isSwipeEvent,
          sectionDirection,
        }) => {
          const section = sections[selectedSectionIndex];
          const selectedId = section && section.id;

          return (
            <MainAnimation
              {...this.props}
              onLeftSideSectionRef={onLeftSideSectionRef}
              containerClassName={styles.jobsContainer}
              leftSide={
                <AdditionalMenu
                  selectedId={section && section.id}
                  onSectionChange={onSectionChange}
                  leftSide
                  additionalMenu={currentRoute.additionalMenu}
                  isOpen={true}
                />
              }
              rightSide={
                <CenterBlock ref={onScrollableRef}>
                  <Responsive minWidth={769}>
                    <Scrollable
                      sections={sections}
                      transitionEnd={transitionEnd}
                      selectedSectionIndex={selectedSectionIndex}
                      scrollToBlock={scrollToBlock}
                      selectedId={selectedId}
                      onSectionChange={onSectionChange}
                    />
                  </Responsive>
                  <Responsive maxWidth={768}>
                    <JobsCard
                      isSwipeEvent={isSwipeEvent}
                      sections={sections}
                      selectedSectionIndex={selectedSectionIndex}
                      onSectionChange={onSectionChange}
                      sectionDirection={sectionDirection}
                    />
                  </Responsive>
                </CenterBlock>
              }
            />
          );
        }}
      </MainLayoutConsumer>
    );
  }
}

export default Jobs;
