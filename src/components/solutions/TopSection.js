import React from "react";
import { Row, Col, Typography } from "antd";
import Img from "gatsby-image";
import { TopSectionDiv } from "./Solutions.styles";

const { Title, Text } = Typography;

export default function TopSection({ data }) {
    return (
        <TopSectionDiv>
            <Row align="middle" gutter={[16, 16]} justify="center">
                <Col style={{paddingLeft: 20, paddingRight: 20}} xs={24} sm={24} lg={8} xl={8}>
                    <Title level={2} style={{ color: "#fff", }}>
                        {data.title}
                    </Title>
                    <Title level={5} style={{ color: "#fff", fontWeight: "bold", padding: "0 20"  }}>
                        {data.subTitle}
                    </Title>
                    <Text style={{color: "#fff", padding: "0 20" }}>
                        {data.description.description}
                    </Text> 
                </Col>
                <Col align="middle" xs={24} sm={24} lg={6} xl={6}>
                    <Img fixed={data.topSectionImage.fixed} />
                </Col>
            </Row>
        </TopSectionDiv>
    );
}
