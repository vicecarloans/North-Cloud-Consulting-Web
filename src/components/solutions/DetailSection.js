import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
import { SolutionDetailsDiv } from "./Solutions.styles";
import { Typography, Row, Col, Image } from "antd";
import useDeviceDetect from "utils/useDeviceDetect";

const { Title, Text } = Typography;

export default function DetailSection({ solutions }) {
    const { isMobile } = useDeviceDetect();

    return solutions.map((solution, i) => {
        if (isMobile) {
            return (
                <VisibilitySensor key={i} partialVisibility>
                    {({ isVisible }) => (
                        <SolutionDetailsDiv>
                            <Row
                                align="middle"
                                gutter={[16, 16]}
                                justify="center"
                            >
                                <Spring
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? "translateX(0)"
                                            : "translateX(-100px)",
                                    }}
                                >
                                    {(styles) => (
                                        <Col
                                            style={{ ...styles }}
                                            align="middle"
                                            xs={24}
                                            sm={24}
                                            lg={6}
                                            xl={6}
                                        >
                                            <Image
                                                src={`https:${solution.image.fluid.src}`}
                                                alt={solution.title}
                                            />
                                        </Col>
                                    )}
                                </Spring>
                                <Spring
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? "translateX(0)"
                                            : "translateX(100px)",
                                    }}
                                >
                                    {(styles) => (
                                        <Col
                                            style={{
                                                ...styles,
                                                paddingLeft: 20,
                                                paddingRight: 20,
                                                textAlign: "left",
                                            }}
                                            xs={24}
                                            sm={24}
                                            lg={8}
                                            xl={8}
                                        >
                                            <Title
                                                level={5}
                                                style={{ fontWeight: "bold" }}
                                            >
                                                {solution.title}
                                            </Title>
                                            <Text
                                                style={{ fontWeight: "bold" }}
                                            >
                                                {solution.subTitle}
                                            </Text>
                                            <ul>
                                                {solution.mainPoints.map(
                                                    (main, i) => (
                                                        <li key={i}>
                                                            <Text>{main}</Text>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </Col>
                                    )}
                                </Spring>
                            </Row>
                        </SolutionDetailsDiv>
                    )}
                </VisibilitySensor>
            );
        }
        return i % 2 == 0 ? (
            <VisibilitySensor key={i} partialVisibility>
                {({ isVisible }) => (
                    <SolutionDetailsDiv>
                        <Row align="middle" gutter={[16, 16]} justify="center">
                            <Spring
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateX(0)"
                                        : "translateX(-100px)",
                                }}
                            >
                                {(styles) => (
                                    <Col
                                        style={{ ...styles }}
                                        align="middle"
                                        xs={24}
                                        sm={24}
                                        lg={6}
                                        xl={6}
                                    >
                                        <Image
                                            src={`https:${solution.image.fluid.src}`}
                                            alt={solution.title}
                                        />
                                    </Col>
                                )}
                            </Spring>
                            <Spring
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateX(0)"
                                        : "translateX(100px)",
                                }}
                            >
                                {(styles) => (
                                    <Col
                                        style={{
                                            ...styles,
                                            paddingLeft: 20,
                                            paddingRight: 20,
                                            textAlign: "left",
                                        }}
                                        xs={24}
                                        sm={24}
                                        lg={8}
                                        xl={8}
                                    >
                                        <Title
                                            level={5}
                                            style={{ fontWeight: "bold" }}
                                        >
                                            {solution.title}
                                        </Title>
                                        <Text style={{ fontWeight: "bold" }}>
                                            {solution.subTitle}
                                        </Text>
                                        <ul>
                                            {solution.mainPoints.map(
                                                (main, i) => (
                                                    <li key={i}>
                                                        <Text>{main}</Text>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </Col>
                                )}
                            </Spring>
                        </Row>
                    </SolutionDetailsDiv>
                )}
            </VisibilitySensor>
        ) : (
            <VisibilitySensor key={i} partialVisibility>
                {({ isVisible }) => (
                    <SolutionDetailsDiv>
                        <Row align="middle" gutter={[16, 16]} justify="center">
                            <Spring
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateX(0)"
                                        : "translateX(-100px)",
                                }}
                            >
                                {(styles) => (
                                    <Col
                                        style={{
                                            ...styles,
                                            paddingLeft: 20,
                                            paddingRight: 20,
                                            textAlign: "left",
                                        }}
                                        xs={24}
                                        sm={24}
                                        lg={8}
                                        xl={8}
                                    >
                                        <Title level={5}>
                                            {solution.title}
                                        </Title>
                                        <Text style={{ fontWeight: "bold" }}>
                                            {solution.subTitle}
                                        </Text>
                                        <ul>
                                            {solution.mainPoints.map(
                                                (main, i) => (
                                                    <li key={i}>
                                                        <Text>{main}</Text>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </Col>
                                )}
                            </Spring>
                            <Spring
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateX(0)"
                                        : "translateX(100px)",
                                }}
                            >
                                {(styles) => (
                                    <Col
                                        style={{ ...styles }}
                                        align="middle"
                                        xs={24}
                                        sm={24}
                                        lg={6}
                                        xl={6}
                                    >
                                        <Image
                                            src={`https:${solution.image.fluid.src}`}
                                            alt={solution.title}
                                        />
                                    </Col>
                                )}
                            </Spring>
                        </Row>
                    </SolutionDetailsDiv>
                )}
            </VisibilitySensor>
        );
    });
}
