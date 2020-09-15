import React from "react";
import { Typography } from "antd";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export const richTextConfig = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <Typography.Paragraph>{children}</Typography.Paragraph>
        ),
    },
    renderMark: {
        [MARKS.CODE]: (text) => (
            <pre><code>{text}</code></pre>
        ),
    },
};
