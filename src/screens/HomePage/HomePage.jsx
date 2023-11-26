import React from "react";
import { About } from "../../components/About";
import { Blog } from "../../components/Blog";
import { Contact } from "../../components/Contact";
import { Dropdown } from "../../components/Dropdown";
import { Email } from "../../components/Email";
import { Number } from "../../components/Number";
import { Paragraph } from "../../components/Paragraph";
import { Portfolio } from "../../components/Portfolio";
import { Services } from "../../components/Services";
import { ShortAnswer } from "../../components/ShortAnswer";
import { SubmitButton } from "../../components/SubmitButton";
import { Top } from "../../components/Top";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div-2">
        <div className="overlap">
          <div className="overlap-2">
            <div className="last-section">
              <div className="group">
                <img className="logo" alt="Logo" src="/img/logo-05-2.png" />
                <p className="dinarte-vieira">
                  <span className="span">Dinarte</span>
                  <span className="text-wrapper-15">Vieira</span>
                </p>
                <p className="p">© 2024 Dinarte Vieira. All rights reserved.</p>
              </div>
            </div>
            <div className="element-section">
              <div className="group-2">
                <div className="text-wrapper-16">Call me:</div>
                <div className="text-wrapper-17">(+351) 963 202 886</div>
              </div>
              <div className="group-3">
                <div className="text-wrapper-16">E-mail:</div>
                <div className="text-wrapper-17">antoniodinartevieira@gmail.com</div>
              </div>
              <div className="group-4">
                <div className="text-wrapper-16">Adress:</div>
                <div className="text-wrapper-17">Funchal, Madeira</div>
              </div>
              <div className="overlap-group-2">
                <p className="ready-to-chat">
                  <span className="text-wrapper-18">Ready to </span>
                  <span className="text-wrapper-19">Chat?</span>
                </p>
                <img className="vector-2" alt="Vector" src="/img/vector-5.svg" />
              </div>
              <div className="text-wrapper-20">Let’s do something amazing!</div>
              <div className="overlap-3">
                <div className="form-page">
                  <div className="frame-6">
                    <ShortAnswer
                      className="design-component-instance-node"
                      divClassName="design-component-instance-node-2"
                      divClassName1="design-component-instance-node-5"
                      divClassNameOverride="design-component-instance-node-4"
                      frameClassName="design-component-instance-node-3"
                      text="Name"
                    />
                    <Email
                      className="design-component-instance-node"
                      divClassName="design-component-instance-node-2"
                      divClassName1="design-component-instance-node-5"
                      divClassNameOverride="design-component-instance-node-4"
                      frameClassName="design-component-instance-node-3"
                      text="Email"
                    />
                    <Number
                      className="design-component-instance-node"
                      divClassName="design-component-instance-node-2"
                      divClassName1="design-component-instance-node-5"
                      divClassNameOverride="design-component-instance-node-4"
                      frameClassName="design-component-instance-node-3"
                      text="Phone Number"
                    />
                    <Paragraph
                      className="design-component-instance-node"
                      divClassName="design-component-instance-node-2"
                      divClassNameOverride="paragraph-2"
                      frameClassName="paragraph-instance"
                      text="Description of your needs"
                    />
                    <Dropdown
                      className="design-component-instance-node"
                      divClassName="design-component-instance-node-2"
                      divClassNameOverride="design-component-instance-node-4"
                      frame="/img/frame.svg"
                      frameClassName="design-component-instance-node-3"
                      frameClassNameOverride="dropdown-instance"
                      text="My Services"
                    />
                    <SubmitButton className="submit-button-instance" divClassName="submit-button-2" />
                  </div>
                </div>
                <div className="rectangle" />
              </div>
            </div>
          </div>
          <div className="overlap-4">
            <div className="element-th-section">
              <div className="text-wrapper-21">Are you updated?</div>
              <img className="vector-3" alt="Vector" src="/img/vector-4.svg" />
              <p className="text-wrapper-22">Prepare Your Brand and Marketing</p>
              <div className="slide-noticias">
                <div className="div-3">
                  <div className="div-3">
                    <div className="group-5">
                      <div className="component-wrapper">
                        <div className="component">
                          <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-33.svg" />
                        </div>
                      </div>
                      <div className="frame-7">
                        <div className="component">
                          <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-35.svg" />
                        </div>
                      </div>
                      <div className="frame-8">
                        <div className="component">
                          <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-36.png" />
                        </div>
                      </div>
                      <div className="frame-9">
                        <div className="component">
                          <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-37.png" />
                        </div>
                      </div>
                      <div className="frame-10">
                        <div className="component">
                          <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-38.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <img className="arrow" alt="Arrow" src="/img/arrow-1.svg" />
                  </div>
                </div>
                <div className="dots">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                  <div className="ellipse-5" />
                </div>
              </div>
            </div>
            <div className="element-section-2">
              <p className="text-wrapper-23">Making friends along the way!</p>
              <div className="overlap-5">
                <img className="layer" alt="Layer" src="/img/layer-1-2.png" />
                <p className="text-wrapper-24">Where Ideas Come to Life</p>
              </div>
              <div className="overlap-6">
                <div className="overlap-7">
                  <img className="image" alt="Image" src="/img/image-1.png" />
                  <div className="overlap-wrapper">
                    <div className="overlap-8">
                      <img className="vector-4" alt="Vector" src="/img/vector-3.svg" />
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-3">
                          <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-14.png" />
                          <img className="rectangle-8" alt="Rectangle" src="/img/rectangle-13.png" />
                          <img className="rectangle-9" alt="Rectangle" src="/img/rectangle-12.png" />
                          <img className="rectangle-10" alt="Rectangle" src="/img/rectangle-11.png" />
                          <img className="rectangle-11" alt="Rectangle" src="/img/rectangle-10.png" />
                          <img className="rectangle-12" alt="Rectangle" src="/img/rectangle-9.png" />
                          <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-8.png" />
                          <img className="rectangle-14" alt="Rectangle" src="/img/rectangle-7.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-15" />
                  <div className="rectangle-16" />
                  <div className="rectangle-17" />
                  <div className="group-wrapper">
                    <div className="layer-wrapper">
                      <div className="layer-2">
                        <div className="group-6">
                          <img className="group-7" alt="Group" src="/img/group-19.png" />
                          <div className="overlap-9">
                            <img className="vector-5" alt="Vector" src="/img/vector-2.svg" />
                            <img className="vector-6" alt="Vector" src="/img/vector-1.svg" />
                            <div className="group-8">
                              <div className="overlap-10">
                                <img className="group-9" alt="Group" src="/img/group-18.png" />
                                <div className="group-10">
                                  <div className="overlap-10">
                                    <div className="group-11">
                                      <div className="overlap-group-4">
                                        <div className="group-12">
                                          <div className="overlap-group-4">
                                            <img className="group-13" alt="Group" src="/img/group-17.png" />
                                            <div className="img-wrapper">
                                              <img className="group-14" alt="Group" src="/img/group-16.png" />
                                            </div>
                                            <img className="group-15" alt="Group" src="/img/group-15.png" />
                                          </div>
                                        </div>
                                        <img
                                          className="clip-path-group"
                                          alt="Clip path group"
                                          src="/img/clip-path-group-1.png"
                                        />
                                      </div>
                                    </div>
                                    <div className="group-16">
                                      <div className="overlap-group-5">
                                        <img className="group-17" alt="Group" src="/img/group-14.png" />
                                        <div className="group-18">
                                          <div className="overlap-group-5">
                                            <img className="rectangle-18" alt="Rectangle" src="/img/rectangle-5.png" />
                                            <img className="rectangle-19" alt="Rectangle" src="/img/rectangle-4.png" />
                                          </div>
                                        </div>
                                        <img className="group-19" alt="Group" src="/img/group-13.png" />
                                        <img className="group-20" alt="Group" src="/img/group-12.png" />
                                        <img className="group-21" alt="Group" src="/img/group-11.png" />
                                      </div>
                                    </div>
                                    <div className="group-22">
                                      <div className="overlap-group-6">
                                        <img className="group-23" alt="Group" src="/img/group-10.png" />
                                        <div className="group-24">
                                          <div className="overlap-group-6">
                                            <img className="rectangle-20" alt="Rectangle" src="/img/rectangle-3.png" />
                                            <img className="rectangle-21" alt="Rectangle" src="/img/rectangle-2.png" />
                                          </div>
                                        </div>
                                        <img className="group-25" alt="Group" src="/img/group-9.png" />
                                        <img className="group-26" alt="Group" src="/img/group-8.png" />
                                      </div>
                                    </div>
                                    <div className="group-27">
                                      <div className="overlap-11">
                                        <img className="group-28" alt="Group" src="/img/group-7.png" />
                                        <div className="group-29">
                                          <img className="group-30" alt="Group" src="/img/group-6.png" />
                                        </div>
                                        <img className="group-31" alt="Group" src="/img/group-5.png" />
                                      </div>
                                    </div>
                                    <img className="group-32" alt="Group" src="/img/group-4.png" />
                                    <div className="group-33">
                                      <div className="overlap-group-7">
                                        <div className="img-2">
                                          <div className="overlap-group-7">
                                            <img className="group-34" alt="Group" src="/img/group-3.png" />
                                            <img className="img-2" alt="Rectangle" src="/img/rectangle.png" />
                                            <img className="group-35" alt="Group" src="/img/group-2.png" />
                                          </div>
                                        </div>
                                        <img className="img-2" alt="Clip path group" src="/img/clip-path-group.png" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img className="group-36" alt="Group" src="/img/group-1.png" />
                        <img className="group-37" alt="Group" src="/img/group.png" />
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-22" />
                  <div className="posts-IVBAM">
                    <img
                      className="IVBAM-posts-normais"
                      alt="Ivbam posts normais"
                      src="/img/ivbam-posts-normais-16-1.png"
                    />
                    <img
                      className="IVBAM-posts-normais-2"
                      alt="Ivbam posts normais"
                      src="/img/ivbam-posts-normais-03.png"
                    />
                    <img
                      className="IVBAM-posts-normais-3"
                      alt="Ivbam posts normais"
                      src="/img/ivbam-posts-normais-11.png"
                    />
                    <img
                      className="IVBAM-posts-normais-4"
                      alt="Ivbam posts normais"
                      src="/img/ivbam-posts-normais-17.png"
                    />
                    <img
                      className="IVBAM-posts-normais-5"
                      alt="Ivbam posts normais"
                      src="/img/ivbam-posts-normais-19.png"
                    />
                    <img
                      className="IVBAM-posts-normais-6"
                      alt="Ivbam posts normais"
                      src="/img/ivbam-posts-normais-22.png"
                    />
                  </div>
                  <div className="rectangle-23" />
                </div>
                <div className="overlap-12">
                  <img className="image-2" alt="Image" src="/img/image-2.png" />
                  <img className="herbalife" alt="Herbalife" src="/img/herbalife-1.png" />
                  <div className="rectangle-24" />
                  <div className="rectangle-25" />
                  <img className="lonas-ERA" alt="Lonas ERA" src="/img/lonas-era-01-1.png" />
                  <div className="rectangle-26" />
                  <div className="anuncios-financestar">
                    <div className="overlap-13">
                      <img className="anncio" alt="Anncio" src="/img/an-ncio-1-1.png" />
                      <img className="anncio-2" alt="Anncio" src="/img/an-ncio-2-1.png" />
                    </div>
                    <div className="overlap-14">
                      <img className="anncio" alt="Anncio" src="/img/an-ncio-3-1.png" />
                      <img className="post" alt="Post" src="/img/post-1.png" />
                    </div>
                  </div>
                  <div className="rectangle-27" />
                  <div className="rectangle-28" />
                </div>
              </div>
              <img className="vector-7" alt="Vector" src="/img/vector.svg" />
            </div>
            <div className="element-rd-section">
              <div className="overlap-15">
                <p className="text-wrapper-25">Services to Ignite Your Imagination</p>
                <div className="text-wrapper-26">What are you missing?</div>
                <img className="layer-3" alt="Layer" src="/img/layer-1-1.png" />
                <div className="servios-wrapper">
                  <div className="servios">
                    <div className="social-media">
                      Social
                      <br />
                      Media
                    </div>
                    <p className="text-wrapper-27">
                      I’m gonna handle the nitty-gritty of content creation, scheduling, and engagement across
                      platforms, ensuring your brand shines in the digital spotlight. Boost your social media game,
                      leaving you free to focus on what you do best – running your business.
                    </p>
                    <div className="text-wrapper-28">Design</div>
                    <p className="ignite-your-brand-s">
                      Ignite your brand&#39;s visual! From striking logos to eye-catching marketing materials, I bring
                      your ideas to life. Let&#39;s turn your vision into a captivating visual story!
                    </p>
                    <p className="amplify-your-brand-s">
                      Amplify your brand&#39;s narrative with press releases to securing media coverage. Navigate the PR
                      landscape to ensure your brand&#39;s voice is heard. Management of your image, handling crises
                      with finesse, and cultivate positive relationships with the public and media.
                    </p>
                    <div className="public-relations">
                      Public
                      <br />
                      Relations
                    </div>
                    <div className="text-wrapper-29">SEO</div>
                    <p className="text-wrapper-30">
                      I specialize in optimizing your digital presence to ensure your business stands out in search
                      engine results. From strategic keyword planning to technical SEO enhancements. Boost your rankings
                      and drive organic traffic.
                    </p>
                    <div className="google-meta-ads">
                      Google/Meta
                      <br />
                      Ads
                    </div>
                    <p className="text-wrapper-31">
                      Craft targeted and compelling ad campaigns that put your brand front and center. From strategic
                      keyword selection to eye-catching ad creatives, let’s optimize every element for maximum impact.
                      Drive clicks, capture attention, and watch your conversions soar.
                    </p>
                    <p className="text-wrapper-32">
                      Unlock the power of personalized communication creating and executing targeted e-mail campaigns
                      that resonate with your audience. From attention-grabbing subject lines to compelling content
                      crafting emails designed to engage and convert.
                    </p>
                    <div className="text-wrapper-33">E-mail Marketing</div>
                    <p className="text-wrapper-34">
                      Transform your message into a magnetic force crafting words that captivate, compel, and convert.
                      From engaging website content to persuasive marketing copy, our wordsmiths are here to tell your
                      brand story in a way that resonates.
                    </p>
                    <div className="text-wrapper-35">Copywriting</div>
                    <div className="icons">
                      <img className="online-advertising" alt="Online advertising" src="/img/online-advertising.png" />
                      <img className="seo" alt="Seo" src="/img/seo.png" />
                      <img className="social-media-2" alt="Social media" src="/img/social-media.png" />
                      <img className="web-design" alt="Web design" src="/img/web-design.png" />
                      <img className="copywriter" alt="Copywriter" src="/img/copywriter.png" />
                      <img className="email-marketing" alt="Email marketing" src="/img/email-marketing.png" />
                      <img className="handshake" alt="Handshake" src="/img/handshake.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="element-nd-section">
            <div className="overlap-16">
              <div className="overlap-17">
                <div className="overlap-18">
                  <p className="identify-with-me">
                    <span className="text-wrapper-36">Identify With </span>
                    <span className="text-wrapper-37">Me?</span>
                  </p>
                  <img className="layer-4" alt="Layer" src="/img/layer-1.svg" />
                  <p className="text-wrapper-38">The Creative Mind Behind the Scenes</p>
                </div>
                <div className="overlap-19">
                  <img className="me" alt="Me" src="/img/me-02-3.png" />
                  <img className="me-2" alt="Me" src="/img/me-02-2.png" />
                </div>
              </div>
              <p className="with-years-deep-in">
                <span className="text-wrapper-39">With </span>
                <span className="text-wrapper-40">4</span>
                <span className="text-wrapper-39">
                  {" "}
                  years deep in the game, I&#39;ve mastered the art of blending marketing wizardry with some seriously
                  cool self-taught design skills. While my playground is mostly digital, I&#39;m all about those
                  face-to-face vibes because that&#39;s where the magic happens. So, let&#39;s dive into a space where
                  strategy meets design, and we&#39;ll whip up some seriously impactful campaigns together. Excited to
                  chat and make things happen!
                </span>
              </p>
            </div>
            <div className="text-wrapper-41">Communication</div>
            <p className="element-clients">
              <span className="text-wrapper-42">
                +18
                <br />
              </span>
              <span className="text-wrapper-43">Clients</span>
            </p>
            <p className="element-projects">
              <span className="text-wrapper-44">
                +31
                <br />
              </span>
              <span className="text-wrapper-43">Projects</span>
            </p>
            <p className="element-meeting">
              <span className="text-wrapper-45">
                +326
                <br />
              </span>
              <span className="text-wrapper-43">Meeting</span>
            </p>
            <p className="element-coffees-by-year">
              <span className="text-wrapper-46">
                +731
                <br />
              </span>
              <span className="text-wrapper-43">
                Coffees
                <br />
              </span>
              <span className="text-wrapper-47">
                <br />
                *by year
              </span>
            </p>
            <img className="logo-2" alt="Logo" src="/img/logo-07-5.png" />
            <img className="logo-3" alt="Logo" src="/img/logo-07-5.png" />
            <img className="logo-4" alt="Logo" src="/img/logo-07-5.png" />
            <img className="logo-5" alt="Logo" src="/img/logo-07-5.png" />
            <div className="text-wrapper-48">Adaptability</div>
            <div className="text-wrapper-49">Empathy</div>
            <div className="text-wrapper-50">Creativity</div>
            <div className="text-wrapper-51">Resilience</div>
          </div>
          <div className="overlap-20">
            <About className="about-instance" />
            <Services className="services-instance" />
            <Portfolio className="portfolio-instance" />
            <Blog className="blog-instance" />
            <Contact className="contact-instance" />
          </div>
        </div>
        <Top className="top-instance" vector="/img/vector-11-1.svg" vectorClassName="top-2" />
      </div>
    </div>
  );
};
