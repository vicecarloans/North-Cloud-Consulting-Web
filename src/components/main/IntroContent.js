import React, { useContext } from "react";
import {
    IntroContentContainer,
    IntroTitle
} from "./Main.styles";
import useDeviceDetect from "utils/useDeviceDetect";
import { Button } from "antd";
import { ModalContext } from "utils/modal-context";
import { SendOutlined } from "@ant-design/icons";
import { FeedbackList } from "../feedback";
import Markdown from "react-showdown";

export default function IntroContent({ data }) {
    const { toggleModal } = useContext(ModalContext);
    const { isMobile } = useDeviceDetect();
    return (
        <IntroContentContainer>
            <IntroTitle style={{ color: "#fff" }}>{data.title}</IntroTitle>
            {isMobile ? (
                <Markdown
                    markup={data.mobileSubtitle.childMarkdownRemark.html}
                />
            ) : (
                <Markdown markup={data.subTitle.childMarkdownRemark.html} />
            )}

            <Button
                icon={<SendOutlined />}
                style={{ width: 300, height: 60, fontSize: 18 }}
                type="primary"
                onClick={toggleModal}
            >
                Talk To Us!
            </Button>
            {data.feedbacks.length > 0 && (
                <FeedbackList
                    style={{ marginTop: 120 }}
                    feedbacks={data.feedbacks}
                    columnCount={data.columnCount}
                />
            )}
        </IntroContentContainer>
    );
}
