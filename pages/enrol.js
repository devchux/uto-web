import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";

const Enrol = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    classTitle: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.classTitle || !inputs.phoneNumber) {
      setError("Fill all the fields");
      return
    }
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await axios.post("http://localhost:8000/api/classes", inputs);
      setSuccess(true);
      setLoading(false);
      setInputs({
        name: "",
        email: "",
        phoneNumber: "",
        classTitle: "",
      });
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data);
      } else {
        console.error(error);
        setError(error.message);
      }
    }
  };
  return (
    <div className="enrol-page">
      <Breadcrumb title="Class Registration" />
      <section id="course-details" className="course-details">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8">
              <Image
                src="/assets/img/class.png"
                className="img-fluid"
                width="80%"
                height="50%"
                layout="responsive"
                alt=""
              />
              <h3>Join our mentorship class</h3>
              <p>
                We mentor people one-on-one by giving them active listening,
                making ourselves available and accessible, analyzing their
                situations and circumstances to help them understand the best
                way to approach life, and by providing constant assistance of an
                experienced person to them.
              </p>
              <div>
                Also, we mentor people by encouraging them to undergo our unique
                mentorship classes which cover five major themes:
                <ol>
                  <li>Transformation of the mind</li>
                  <li>Exhibiting acceptable behaviours</li>
                  <li>Making right choices in life</li>
                  <li>Maximizing talents, gifts and potentials</li>
                  <li>Transforming the society</li>
                </ol>
              </div>
              <p>
                The classes are organized periodically in our offices, schools,
                and institutions, and remotely on YouTube, WhatsApp, Instagram,
                Zoom, Facebook, and Telegram. If you are interested, fill the
                form below to register.
              </p>
              <p>
                N/B: We are also available to run our mentorship class in your
                school, institution, company, church/mosque, community, state,
                local government, or nation. The assurance is that your children
                and youths will be transformed to point of being able to
                transform society.
              </p>
            </div>
            <div className="col-lg-4 contact"></div>
          </div>
        </div>
      </section>

      <section id="cource-details-tabs" className="cource-details-tabs">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    COUNSELLING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    GUIDANCE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    TEACHING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    MENTORSHIP
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <p className="fst-italic">
                        We render professional and confidential counselling
                        services to children, youths, and adults on an
                        individual and group basis. Also, we provide
                        professional therapeutic intervention for resolving
                        personal, educational, vocational, spiritual, and
                        psychological problems and challenges
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2"></div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <p className="fst-italic">
                        We offer professional guidance services such as giving
                        good advice and the right information to children,
                        youths, and adults through one-on-one contacts, group
                        meetings, outreaches, seminars, workshops, training, and
                        broadcasts. We do this based on the identified needs and
                        challenges of the people around us, or the needs and
                        problems of our society and the world at large.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2"></div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <p className="fst-italic">
                        We adopt a real inspirational approach to teach
                        children, youths, and young adults life-transforming
                        principles. The principles are drawn from evidence-based
                        researches and experiences that have been proven right
                        over many years.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2"></div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <p className="fst-italic">
                        We mentor people one-on-one by giving them active
                        listening, making ourselves available and accessible,
                        analyzing their situations and circumstances to help
                        them understand the best way to approach life, and by
                        providing constant assistance of an experienced person
                        to them.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="container contact" data-aos="fade-up">
        <h3 className="my-5">Fill the form to enrol</h3>
        <form method="post" role="form" onSubmit={handleSubmit} className="w-50 php-email-form">
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Full Name"
              onChange={({ target: { value }}) => handleChange('name', value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              required
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              onChange={({ target: { value }}) => handleChange('email', value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              required
              type="tel"
              className="form-control"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              onChange={({ target: { value }}) => handleChange('phoneNumber', value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Select class:</label>
            <br />
            <br />
            <input
              required
              type="radio"
              name="classTitle"
              style={{ height: "fit-content" }}
              checked={inputs.classTitle === "counselling"}
              onChange={() => handleChange('classTitle', 'counselling')}
            />{" "}
            Counselling
            <br />
            <br />
            <input
              required
              type="radio"
              name="classTitle"
              style={{ height: "fit-content" }}
              checked={inputs.classTitle === "guidance"}
              onChange={() => handleChange('classTitle', 'guidance')}
            />{" "}
            Guidance
            <br />
            <br />
            <input
              required
              type="radio"
              name="classTitle"
              style={{ height: "fit-content" }}
              checked={inputs.classTitle === "teaching"}
              onChange={() => handleChange('classTitle', 'teaching')}
            />{" "}
            Teaching
            <br />
            <br />
            <input
              required
              type="radio"
              name="classTitle"
              style={{ height: "fit-content" }}
              checked={inputs.classTitle === "mentorship"}
              onChange={() => handleChange('classTitle', 'mentorship')}
            />{" "}
            Mentorship
            <br />
          </div>
          <br />
          <div className="my-3">
            {loading ? <div className="loading">Loading</div> : ""}
            {error ? <div className="error-message">{error}</div> : ""}
            {success ? (
              <div className="sent-message">
                Form has been sent. Thank you!
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="text-center">
            <button type="submit">Register</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Enrol;
