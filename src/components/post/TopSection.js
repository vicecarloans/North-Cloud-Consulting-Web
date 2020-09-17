import React from 'react'
import { TopSectionDiv } from '../solutions/Solutions.styles'
import { Tag, Row, Col, Typography, Breadcrumb } from 'antd'
import { StyledLink } from '../structure/styles'

const {Title} = Typography

export default function TopSection({data}) {
    return (
        <TopSectionDiv>
            <Row style={{width: "100%"}} gutter={[16, 16]} justify="center">
                <Col xs={24} sm={24} lg={12} xl={12}>
                    {data.tags.map(tag => <Tag key={tag} color="volcano">{tag}</Tag>)}
                    <Title level={2}>
                        {data.title}
                    </Title>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <StyledLink fade to="/">Home</StyledLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <StyledLink fade to="/blog">Blog</StyledLink>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {data.title}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </TopSectionDiv>
    )
}
