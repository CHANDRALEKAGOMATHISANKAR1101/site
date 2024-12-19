import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";

const TabContent = ({ title, imageUrl, content }) => (
  <Row className="mb-5 ">
    <Col xs={12} md={6}>
      <h3>{title}</h3>
      <div>{content}</div>
    </Col>
    <Col xs={12} md={6} className="text-center">
      <img
        src={imageUrl}
        alt={title}
        className="img-fluid"
        id="digitalimageid"
        style={{ width: "501px", height: "501px" }}
      />
    </Col>
  </Row>
);

const ContentService = () => {
  const tabsData = [
    {
      imageUrl: "assets/img/IT-service.jpg",
      content: (
        <div className="contentsubpage">
          <p>
            In today’s competitive business landscape, choosing the right IT
            partner can be the difference between operational success and
            downtime. At Nextweb, we offer comprehensive IT Services & Support
            Australia, helping businesses of all sizes optimize their technology
            infrastructure for maximum efficiency and security.
          </p>
          {/* <p>
          When it comes to Digital marketing Gold Coast, Australia, Nextweb’s local expertise and commitment to client success make them the go-to choice. We are dedicated to helping businesses not only grow but thrive in the digital landscape.
          </p> */}
        </div>
      ),
    },
  ];

  return (
    <div id="androidhome" className="androidhome">
      <Container
        style={{ padding: "0px 50px 50px 50px", border: "1px solid #fff" }}
      >
        {/* Add Header Section */}
        <Row className="mb-4">
          <Col xs={12} className="text-center">
            <p>Nextweb Pty Ltd</p>
            <h2 style={{ fontFamily: "Oswald", fontSize: "48px" }}>
              Professional IT Services & Support Australia|Nextweb
            </h2>
          </Col>
        </Row>

        {/* Render All Content */}
        {tabsData.map((tab, index) => (
          <TabContent
            key={index}
            title={tab.title}
            imageUrl={tab.imageUrl}
            content={tab.content}
            className="contentandroid"
          />
        ))}
      </Container>
    </div>
  );
};

export default ContentService;
