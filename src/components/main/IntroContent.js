import React, { useContext } from "react";
import {
    IntroContentContainer,
    IntroTitle,
    IntroSubTitle,
} from "./Main.styles";
import useDeviceDetect from "utils/useDeviceDetect";
import { Button } from "antd";
import { ModalContext } from "utils/modal-context";
import { SendOutlined } from "@ant-design/icons";
import { FeedbackList } from '../feedback'

export default function IntroContent({ data }) {
    const { toggleModal } = useContext(ModalContext);
    const { isMobile } = useDeviceDetect();
    return (
        <IntroContentContainer>
            <IntroTitle style={{ color: "#fff" }}>{data.title}</IntroTitle>
            {isMobile ? (
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.mobileSubtitle.childMarkdownRemark.html,
                    }}
                />
            ) : (
                <IntroSubTitle style={{ color: "#fff" }} level={3}>
                    {data.subTitle}
                </IntroSubTitle>
            )}
            <Button
                icon={<SendOutlined />}
                style={{ width: 300, height: 60, fontSize: 18 }}
                type="primary"
                onClick={toggleModal}
            >
                Talk To Us!
            </Button>
            {data.feedbacks.length > 0 && <FeedbackList style={{marginTop: 80}} feedbacks={data.feedbacks} columnCount={data.columnCount} />}
        </IntroContentContainer>
    );
}
