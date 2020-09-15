import React from "react";
import { Typography, Divider, Image } from "antd";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export const richTextConfig = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <Typography.Paragraph>{children}</Typography.Paragraph>
        ),
        [BLOCKS.HEADING_1]: (node, children) => (
            <Typography.Title level={1}>{children}</Typography.Title>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
            <Typography.Title level={2}>{children}</Typography.Title>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
            <Typography.Title level={3}>{children}</Typography.Title>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
            <Typography.Title level={4}>{children}</Typography.Title>
        ),
        [BLOCKS.HEADING_5]: (node, children) => (
            <Typography.Title level={5}>{children}</Typography.Title>
        ),
        [BLOCKS.HEADING_6]: (node, children) => (
            <Typography.Title level={6}>{children}</Typography.Title>
        ),
        [BLOCKS.HR]: (node, children) => (
            <Divider />
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <Image src={`https:${node.data.target.fields?.file["en-US"].url}`} />
        )
    },
    renderMark: {
        [MARKS.CODE]: (text) => (
            <pre><code>{text}</code></pre>
        ),
    },
};
