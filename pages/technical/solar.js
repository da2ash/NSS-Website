import React from "react";
import BasicNavLayout from "../../layouts/BasicNavLayout";
import { Container, Row, Col } from "reactstrap";
import Carousel from "../../components/Carousel";

import { withBaseDir } from "../../util/helpers";

const carouselItems = [
  {
    src: withBaseDir`/static/images/technical/solar/solar-banner.jpeg`,
    altText: "Slide 1"
  },
  {
    src: withBaseDir`/static/images/technical/solar/solar-holding-1.jpeg`,
    altText: "Slide 2"
  },
  {
    src: withBaseDir`/static/images/technical/solar/solar-holding-2.jpeg`,
    altText: "Slide 2"
  },
  {
    src: withBaseDir`/static/images/technical/solar/solar-machine.jpeg`,
    altText: "Slide 3"
  },
  {
    src: withBaseDir`/static/images/technical/solar/solar-package.jpeg`,
    altText: "Slide 4"
  },
  {
    src: withBaseDir`/static/images/technical/solar/solar-panel-2.jpeg`,
    altText: "Slide 5"
  }
];

export default () => (
  <React.Fragment>
    <div className="Main">
      <BasicNavLayout title="Technical">
        <Carousel items={carouselItems} />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h3
                className="Heading"
                style={{
                  background: "#ff9f43",
                  color: "white",
                  marginBottom: "2rem"
                }}
              >
                <b>Project Solar</b>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lead">
                DJ NSS, in its journey, strives to make known the importance of
                technology through its events. Technology can affect, change and
                develop lives to a great extent. For a public platform, the
                level of responsibility and satisfaction is raised to another
                extent because it's something that’s affecting the bearers lives
                👨‍👩‍👧‍👦 &nbsp;During our special camp, we came across a school in Ambewadi
                village, which lacked many amenities needed for the growth of
                the students. One of the reasons for that was the unaffordable
                electric supply. We then planned and implemented our technical
                project "SOLAR PANELS INSTALLATION". Understanding the need and
                the requirement we installed a 720-watt solar power off-grid
                setup. We further plan to work on its security system and
                longevity . We hope that as a team we could help and inspire
                some beautiful young lives, inculcating the sense of
                responsibility among our volunteers towards the society and also
                making people understand that technology is an essential aspect
                of social service in today's times.
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </BasicNavLayout>
    </div>
  </React.Fragment>
);
