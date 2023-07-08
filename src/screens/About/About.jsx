import React from "react";
import { MenuItem } from "../../components/MenuItem";
import { HeroiconsOutlineBuildingLibrary } from "../../icons/HeroiconsOutlineBuildingLibrary";
import { HeroiconsOutlineEnvelope } from "../../icons/HeroiconsOutlineEnvelope";
import { HeroiconsOutlineGift1 } from "../../icons/HeroiconsOutlineGift1";
import "./style.css";

export const About = () => {
  return (
    <div className="about">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="div">
            <div className="menu">
              <div className="frame">
                <div className="frame-2">
                  <div className="logo">
                    <div className="frame-3">
                      <img
                        className="k"
                        alt="K"
                        src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/k--2--1-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="menu-wrapper">
                    <div className="menu-2">
                      <div className="menu-item-2">
                        <img
                          className="heroicons-outline-2"
                          alt="Heroicons outline"
                          src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/heroicons-outline-home-6.svg"
                        />
                        <div className="home-2">Dashboard</div>
                      </div>
                      <div className="menu-item-2">
                        <div className="heroicons-outline-2">
                          <img
                            className="vector"
                            alt="Vector"
                            src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/vector.svg"
                          />
                        </div>
                        <div className="home-2">Accounts</div>
                      </div>
                      <div className="menu-item-2">
                        <img
                          className="img"
                          alt="Heroicons outline"
                          src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/heroicons-outline-banknotes-2.svg"
                        />
                        <div className="home-2">Transactions</div>
                      </div>
                      <MenuItem
                        homeClassName="menu-item-instance"
                        icon={<HeroiconsOutlineBuildingLibrary className="heroicons-outline-2" color="#495057" />}
                        label="Stock Rewards"
                        state="active"
                      />
                      <MenuItem
                        homeClassName="menu-item-instance"
                        icon={<HeroiconsOutlineGift1 className="heroicons-outline-2" color="#495057" />}
                        label="Offers"
                        state="active"
                      />
                    </div>
                  </div>
                </div>
                <div className="menu-wrapper">
                  <div className="menu-2">
                    <div className="menu-item-2">
                      <HeroiconsOutlineEnvelope className="heroicons-outline-2" color="#495057" />
                      <div className="home-2">Messages</div>
                      <div className="overlap-group-wrapper">
                        <div className="div-wrapper">
                          <div className="text-wrapper-2">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-account">
                <div className="frame-3">
                  <img
                    className="ellipse"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/ellipse-2-1@2x.png"
                  />
                  <div className="frame-4">
                    <div className="text-wrapper-3">David Wise</div>
                    <div className="partner">david@gmail.com</div>
                  </div>
                </div>
                <img
                  className="heroicons-outline-2"
                  alt="Heroicons outline"
                  src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/heroicons-outline-ellipsis-horizontal-1.svg"
                />
              </div>
            </div>
            <img
              className="frame-5"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/frame-110.png"
            />
          </div>
          <div className="frame-6">
            <div className="frame-7">
              <div className="navigation">
                <h1 className="h-1">Built by passionate teams.</h1>
              </div>
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet consectetur. Lorem et varius lobortis massa libero commodo lectus sapien. Sit
                eu nam faucibus cum amet molestie enim euismod. Platea ultrices adipiscing dui gravida eleifend quis
                blandit in. Dignissim habitant cras facilisis ullamcorper. Sit in sapien elementum amet cursus odio.
                Magna amet lectus tempor habitant vitae eu cursus nullam. <br />
                <br />
                Tortor consequat volutpat eget dui sed sit sit. Faucibus nibh in curabitur ornare duis. Aliquet cursus
                tortor proin aliquet. Blandit nulla volutpat gravida sapien pharetra.
                <br />
                Dui sed quam augue nibh. Lorem sem at nulla semper praesent sed vitae eleifend quis. Vitae risus lectus
                auctor odio. Pretium non morbi blandit fusce. Aliquam felis quis id velit. At ac risus amet facilisi
                pulvinar maecenas suscipit a nec.
              </p>
              <img
                className="image"
                alt="Image"
                src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/image-1@2x.png"
              />
              <div className="frame-8">
                <img
                  className="image-2"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/image-2@2x.png"
                />
                <div className="frame-9">
                  <div className="text-wrapper-4">Vashon Gonzales</div>
                  <div className="text-wrapper-5">Chairman, KAPED INC</div>
                </div>
              </div>
            </div>
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <div className="ellipse-2" />
                  <div className="frame-13">
                    <div className="text-wrapper-3">Jim Designs</div>
                    <div className="text-wrapper-6">Product Design</div>
                  </div>
                  <img
                    className="visit-website"
                    alt="Visit website"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/visit-website.png"
                  />
                </div>
                <div className="frame-12">
                  <img
                    className="ellipse-3"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/ellipse-1-6@2x.png"
                  />
                  <div className="frame-13">
                    <div className="text-wrapper-3">Track Div</div>
                    <div className="text-wrapper-6">Engeeniring</div>
                  </div>
                  <div className="text-wrapper-7">Visit website</div>
                </div>
                <div className="frame-12">
                  <img
                    className="ellipse-3"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/ellipse-1-5@2x.png"
                  />
                  <div className="frame-13">
                    <div className="text-wrapper-3">Plaid</div>
                    <div className="text-wrapper-6">Card issuing</div>
                  </div>
                  <div className="text-wrapper-7">Visit website</div>
                </div>
              </div>
              <div className="frame-11">
                <div className="frame-12">
                  <img
                    className="ellipse-4"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/ellipse-1-4@2x.png"
                  />
                  <div className="frame-13">
                    <div className="text-wrapper-3">Kim Buffet</div>
                    <div className="text-wrapper-8">Advisor</div>
                  </div>
                  <div className="text-wrapper-7">Visit website</div>
                </div>
                <div className="frame-12">
                  <img
                    className="ellipse-4"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/ellipse-1-3@2x.png"
                  />
                  <div className="frame-13">
                    <div className="text-wrapper-3">David Hampton</div>
                    <div className="text-wrapper-8">Advisor</div>
                  </div>
                  <div className="text-wrapper-7">Visit website</div>
                </div>
                <div className="frame-12">
                  <img
                    className="ellipse-4"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/ellipse-1-2@2x.png"
                  />
                  <div className="frame-13">
                    <div className="text-wrapper-3">John Doe</div>
                    <div className="text-wrapper-6">Investor</div>
                  </div>
                  <div className="text-wrapper-7">Visit website</div>
                </div>
              </div>
              <div className="frame-14">
                <div className="frame-12">
                  <img
                    className="ellipse-3"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/ellipse-1-1@2x.png"
                  />
                  <div className="frame-13">
                    <div className="text-wrapper-3">Company</div>
                    <div className="text-wrapper-6">Card issuing</div>
                  </div>
                  <div className="text-wrapper-7">Visit website</div>
                </div>
                <div className="frame-12">
                  <img
                    className="ellipse-4"
                    alt="Ellipse"
                    src="https://generation-sessions.s3.amazonaws.com/29d99145131e5bae6709b4319b9a2b93/img/ellipse-1@2x.png"
                  />
                  <div className="frame-13">
                    <div className="text-wrapper-3">Stripe</div>
                    <div className="text-wrapper-6">Payments</div>
                  </div>
                  <div className="text-wrapper-7">Visit website</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
