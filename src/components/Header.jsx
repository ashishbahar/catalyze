import React from "react";
import MyNav from "./MyNav";
import { Col, Row } from "react-bootstrap";
import arrow from "../assets/images/svg/arrow.svg";
import toparrow from "../assets/images/svg/toparrow.svg";
import bottomarrow from "../assets/images/svg/bottomarrow.svg";

const Header = () => {
  return (
    <header className="bg_white position-relative overflow-hidden">
      <MyNav />
      <div className="green_circle"></div>
      <div className="green_big_circle"></div>
      <div className="blue_position_circle"></div>
      <div className="blue_position_small_circle"></div>
      <div className="grey_position_circle"></div>

      <div className="container_cus">
        <Row className=" pt-5">
          <Col lg={6} className=" position-relative z_index_2">
            <div className=" w_163px position-relative">
              <img
                className=" position-absolute toparrow_position"
                src={toparrow}
                alt="toparrow"
              />{" "}
              <img
                className=" position-absolute bottomarrow_position"
                src={bottomarrow}
                alt="bottomarrow"
              />
              <div className=" mini_box m-auto">
                <div className="blackline"></div>{" "}
                <div className="greyline"></div>
              </div>{" "}
              <div className=" mini_box mt-3 m-auto">
                <div className="greyline"></div>{" "}
                <div className="blackline"></div>{" "}
              </div>
            </div>
            <div className=""> </div>
          </Col>
          <Col lg={6} className=" z_index_2">
            <div>
              <h1 className=" ff_Segoe fw-semibold fs_xl color_black">
                Grow your business with Event-Driven Predictive Analytics
              </h1>
              <p className=" ff_Segoe fw-normal fs_sm color_black opacity_7">
                It is a long established fact that a reader will be distracted
                by the using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it the look at you.
              </p>
            </div>
            <Row className=" my-5">
              <Col xs={10} sm={6} className=" p-1 mx_max_auto ">
                <div className=" header_green_box c_pointer h-100 d-flex flex-column justify-content-between  h-100">
                  <div>
                    {" "}
                    <p className="mb-0 ff_Segoe fw-semibold fs_sm color_white opacity_7">
                      boost your
                    </p>
                    <p className=" ff_Segoe fw-semibold fs_md color_white mb-0">
                      Financial Services
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 align-items-center">
                    {" "}
                    <p className=" ff_Segoe fw-semibold fs_sm color_white mb-0">
                      Learn more
                    </p>
                    <img className=" hover_translate" src={arrow} alt="arrow" />
                  </div>
                </div>
              </Col>
              <Col xs={10} sm={6} className="p-1 mt-3 mt-sm-0 mx_max_auto">
                <div className=" header_blue_box c_pointer d-flex flex-column justify-content-between h-100">
                  <div>
                    {" "}
                    <p className="mb-0 ff_Segoe fw-semibold fs_sm color_white opacity_7">
                      boost your
                    </p>
                    <p className=" ff_Segoe fw-semibold fs_md color_white mb-0">
                      Real Estate
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 align-items-center">
                    {" "}
                    <p className=" ff_Segoe fw-semibold fs_sm color_white mb-0">
                      Learn more
                    </p>
                    <img className=" hover_translate" src={arrow} alt="arrow" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
