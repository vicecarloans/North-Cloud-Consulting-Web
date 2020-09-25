import React from 'react'
import { TopSectionDiv } from '../solutions/Solutions.styles'
import { Row, Col, Typography } from 'antd'
import Img from "gatsby-image";

const { Title } = Typography;

export default function BlogTopSection({data}) {
    return (
        <TopSectionDiv>
            <Row align="middle" gutter={[16, 16]} justify="center">
                <Col style={{paddingLeft: 20, paddingRight: 20}} xs={24} sm={24} lg={8} xl={8}>
                    <Title>
                        {data.title}
                    </Title>
                    <Title level={5} style={{fontWeight: "bold", padding: "0 20"  }}>
                        {data.subTitle}
                    </Title>
                    <div style={{padding: "0 20" }} dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
                </Col>
                <Col align="middle" xs={24} sm={24} lg={6} xl={6}>
                    <Img fixed={data.topSectionImage.fixed} />
                </Col>
            </Row>
        </TopSectionDiv>
    );
}
