import Image from "next/image"

const Event = () => {
  return (
    <section id="popular-articles" className="articles">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Events</h2>
          <p>Recent events</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="article-item">
              <Image
                src="/assets/img/course-1.jpg"
                className="img-fluid"
                width="100%"
                height="100%"
                layout="responsive"
                alt="..."
              />
              <div className="article-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Feb 21, 2022</h4>
                  <p className="price">9:30 am</p>
                </div>

                <h3>
                  <a href="article-details.html">Website Design</a>
                </h3>
                <p>
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <span>Antonio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="article-item">
              <Image
                src="/assets/img/course-2.jpg"
                className="img-fluid"
                width="100%"
                height="100%"
                layout="responsive"
                alt="..."
              />
              <div className="article-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Dec 5, 2021</h4>
                  <p className="price">12:00 pm</p>
                </div>

                <h3>
                  <a href="article-details.html">Search Engine Optimization</a>
                </h3>
                <p>
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <span>Lana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="article-item">
              <Image
                src="/assets/img/course-3.jpg"
                className="img-fluid"
                width="100%"
                height="100%"
                layout="responsive"
                alt="..."
              />
              <div className="article-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Jan 2, 2022</h4>
                  <p className="price">10:00 am</p>
                </div>

                <h3>
                  <a href="article-details.html">Copywriting</a>
                </h3>
                <p>
                  Et architecto provident deleniti facere repellat nobis iste.
                  Id facere quia quae dolores dolorem tempore.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <span>Brandon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Event
