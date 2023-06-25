import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Companies I have worked for</h5>
      <h2>My Experience</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Full Stack Software Engineer</h3>
            <h3>Zmags</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Collaborating with the core team to develop "Creator Connect," a
                React TypeScript-based platform empowering clients to create
                dynamic eCommerce experiences without coding.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Spearheading the development of the Support Hub, an internally
                built tool for client and version management. Architecting the
                solution from scratch using ReactJS and Recoil State Management.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Actively contributing to the creation of database schemas and
                implementing Single Table Architecture for DynamoDB. Also,
                developed data migration scripts to ensure a smooth transition.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Developing NodeJS-based AWS Lambda Functions (Rest APIs) with
                built-in authentication for effective data visibility and
                management.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Software Developer</h3>
            <h3>Tata Consultancy Services</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Implemented timely development of changes in product (Trader and
                Admin workstations) using C# and VB, while also creating
                relevant test cases for release management.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Identified code-related issues, proposed effective solutions,
                planned actions, and efficiently managed and prioritised tasks
                to ensure timely resolution.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Coordinated with teams to ensure IP and E compliance using
                Microsoft FxCop and maintained application version control.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Acquired a comprehensive understanding of Capital Market
                fundamentals to effectively support clients and resolve queries.
              </p>
            </li>
          </ul>
        </article>

        {/* <article className="service">
          <div className="service_head">
            <h3>Research and Development Intern</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Lorem Ipsum is simply dummy text of the printing and </p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
