import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const SupportService = () => {
  return (
    <div className="digital bg-white">
      <div className="container bg-white text-black" id="contentsubpage">
        <h1
          className="text-center p-4"
          style={{ fontFamily: "Oswald", fontSize: "48px" }}
        >
          Comprehensive IT Services & Support
        </h1>
        <p>
          At Nextweb, we provide an extensive range of IT services designed to
          support businesses across the Australia. Whether you need cloud
          solutions for flexible remote work or cyber security services to
          protect against emerging threats, we have you covered.
        </p>

        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6">
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>{" "}
                  Managed IT Services:
                </h5>
                <p>
                  Our fully managed IT services ensure your systems are
                  continuously monitored and maintained, allowing you to focus
                  on your core business.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>Cloud
                  Solutions:
                </h5>
                <p>
                  We help you move to the cloud, providing scalable, secure, and
                  flexible cloud computing services.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i> Cyber
                  security:
                </h5>
                <p>
                  Protect your business from online threats with our robust
                  cybersecurity solutions, including firewall management, data
                  encryption, and disaster recovery.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i> IT
                  Consulting:
                </h5>
                <p>
                  We offer strategic IT consulting to help you implement the
                  right technology to support your business goals.
                </p>
              </section>
              <p>
                Our solutions are designed to fit your business needs, offering
                affordable IT Services & Support to ensure that every business
                in Australia can stay competitive and secure.
              </p>
            </div>

            {/* Column 2 */}
            <div className="col-md-6">
              <h5>The Benefits of Professional IT Services & Support </h5>
              <p>
                Investing in professional IT Services & Support Australia
                provides your business with more than just technical expertise.
                At Nextweb, we help improve business efficiency by offering
                scalable solutions that allow you to grow with confidence.
              </p>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>{" "}
                  Increased Efficiency:
                </h5>
                <p>
                  Our managed IT services streamline your operations by
                  automating critical tasks such as data backups and security
                  updates, allowing you to focus on core business activities.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>{" "}
                  Enhanced Security:
                </h5>
                <p>
                  We implement comprehensive cybersecurity strategies to protect
                  your business from online threats.
                </p>
              </section>
              <section>
                <h5>
                  <i className="fa-solid fa-circle-check me-2 right"></i>
                  Cost-Effectiveness:
                </h5>
                <p>
                  With our pay-as-you-go models for services like cloud
                  infrastructure, you only pay for what you need, making our
                  services flexible and budget-friendly.
                </p>
                <p></p>
              </section>
              <p>
                In a region like Australia, where businesses are increasingly
                reliant on technology, our expert IT Services & Support ensure
                that you stay ahead of the competition.
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div
          className="container"
          style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}
        >
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="assets/img/service1.jpg"
                alt="Service 1"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 1</p> */}
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/service2.jpg"
                alt="Service 2"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 2</p> */}
            </div>
            <div className="col-md-4">
              <img
                src="assets/img/service3.jpg"
                alt="Service 3"
                className="img-fluid rounded"
              />
              {/* <p className="mt-2">Service 3</p> */}
            </div>
          </div>
        </div>

        <div className="demoser">
          <h5>How to Book IT Services & Support</h5>
        </div>
        <ol>
          <li>
            Reach Out: Contact us at{" "}
            <a
              href="tel:1800365247"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "600",
              }}
            >
              1800 365 247
            </a>{" "}
            or{" "}
            <a
              href="tel:1800365247"
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "600",
              }}
            >
              visit us at 103/9 Bay Street Southport, QLD 4215.
            </a>
          </li>
          <li>
            {" "}
            Initial Consultation: We’ll assess your IT requirements and suggest
            the most suitable services for your business.
          </li>
          <li>
            Tailored Service Plan: We’ll provide a detailed IT support plan that
            fits your business needs and budget.
          </li>
          <li>
            Implementation: Once the plan is approved, our team will start
            setting up your IT infrastructure to ensure seamless operations.
          </li>
        </ol>
        <p>
          For more details or to book IT Services & Support Gold Coast,
          Australia, reach out today!
        </p>

        <h5>FAQs</h5>
        <div className="pb-4 pt-3">
          <Accordion style={{ backgroundColor: "#f8f9fa" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ backgroundColor: "#f8f9fa" }}>
                What is the cost of IT Services & Support in Gold Coast?
              </Accordion.Header>
              <Accordion.Body style={{ backgroundColor: "#f8f9fa" }}>
                Prices vary based on your specific needs. Our affordable IT
                Services & Support are customized to your business, offering a
                cost-effective solution for every budget.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What are the best practices for IT Services & Support in Gold
                Coast?
              </Accordion.Header>
              <Accordion.Body>
                Adopting managed IT services is a best practice for businesses
                in Gold Coast. These services help streamline operations, secure
                systems, and improve efficiency.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What is the best practice for IT Services & Support in Gold
                Coast?
              </Accordion.Header>
              <Accordion.Body>
                The best practice includes using a combination of SEO, social
                media marketing, online advertising, and content marketing. By
                leveraging these strategies, businesses can increase their
                online visibility and attract more customers. Localizing content
                for the Goldcoast market is also essential for connecting with
                the right audience.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <section>
          <p>
            Choosing Nextweb for your IT Services & Support Gold Coast needs
            ensures that your business is always operating at peak performance.
            From managed IT solutions to cyber security, our team of experts is
            dedicated to providing the support you need to succeed. Contact us
            today at 1800 365 247 or visit us at 103/9 Bay Street Southport, QLD
            4215 to get started with the best IT Services & Support in Gold
            Coast, Australia.
          </p>
          {/* <p>Contact us today at 1800 365 247 or visit our office at 103/9 Bay Street Southport, QLD 4215 to learn more or schedule a consultation.
      </p>
      <p>For the best Digital marketing in Gold Coast, Australia, Nextweb has you covered. Let us help you take your business to the next level!
      </p> */}
        </section>
      </div>
    </div>
  );
};

export default SupportService;
