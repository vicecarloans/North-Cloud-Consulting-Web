import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

export default function Feedback({ author, role, icon, description }) {
    return (
        <Card
            style={{ width: 350, padding: 25, margin: "0 auto" }}
            cover={
                <div
                    dangerouslySetInnerHTML={{
                        __html: description.childMarkdownRemark.html,
                    }}
                />
            }
        >
            <Meta
                avatar={<Avatar style={{marginTop: 15}} size={50} src={`https:${icon}`} />}
                title={author}
                description={role}
            />
        </Card>
    );
}
