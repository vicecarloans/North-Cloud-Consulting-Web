import React from 'react'
import { TopSectionDiv } from '../solutions/Solutions.styles'
import { Row, Col, Typography } from 'antd'
import Img from "gatsby-image";

const { Title, Text } = Typography;

export default function AboutTopSection({data}) {
    return (
        <TopSectionDiv>
            <Row align="middle" gutter={[16, 16]} justify="center">
                <Col style={{paddingLeft: 20, paddingRight: 20}} xs={24} sm={24} lg={8} xl={8}>
                    <Title >
                        {data.title}
                    </Title>
                    <Title level={5} style={{ fontWeight: "bold", padding: "0 20"  }}>
                        {data.subTitle}
                    </Title>
                    <Text style={{padding: "0 20" }}>
                        {data.childContentfulAboutPageDescriptionTextNode.description}
                    </Text> 
                </Col>
                <Col align="middle" xs={24} sm={24} lg={6} xl={6}>
                    <Img fixed={data.topSectionImage.fixed} />
                </Col>
            </Row>
        </TopSectionDiv>
    );
}
