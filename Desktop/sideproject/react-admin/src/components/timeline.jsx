import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate student at Carnegie Mellon University<span> 08/2022 - 12/2023</span></h2>
                        <p>I am pursuing a degree in information systems management where provided me with invaluable opportunities to further develop my skills and knowledge in distributed system and data analysis. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Business Intelligence Engineer at Hewlett Packard<span> 08/2021 - 08/2022</span></h2>
                        <p>At HP, I designed and implemented a highly robust data pipeline that connected the web application with Python API, MS SQL, and VBA, enabling users to easily access card cost information. Through this pipeline, users were able to seamlessly upload and visualize their data, resulting in a significant 24-hour per month improvement in operational efficiency.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Data Analyst at Bank Sinopack<span> 05/2022 - 12/2023</span></h2>
                        <p>I implemented scalable data pipelines and applications that handle over 60,000 daily user behavior data, providing visualization capabilities to support business decisions.</p> 
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Data Scientist intern at Fubon Insurance CO.<span> 03/2017 - 09/2017</span></h2>
                        <p>I built artificial neural network and random forest model in R to categorize insurance documents with 90% accuracy rate, automating the distribution process that helped eliminate manual labor.</p> 
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor student at National Chengchi University<span> 09/2014 - 06/2018</span></h2>
                        <p>As a statistics major, I gained a comprehensive understanding of various statistical methods, including linear regression and time series analysis.</p> 
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}