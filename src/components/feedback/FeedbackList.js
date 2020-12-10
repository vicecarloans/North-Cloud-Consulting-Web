import React from "react";
import { Carousel } from "antd";
import Feedback from "./Feedback";
import { FeedbackWrapper } from "./Feedback.styles";
import useDeviceDetect from "utils/useDeviceDetect";
export default function FeedbackList({ feedbacks, columnCount, style = {} }) {
    const { isMobile } = useDeviceDetect();
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        slidesToScroll: isMobile ? 1 : columnCount,
        slidesToShow: isMobile ? 1 : columnCount,
    };
    return (
        <Carousel style={style} {...settings}>
            {feedbacks.map((feedback, i) => (
                <FeedbackWrapper key={feedback.id}>
                    <Feedback
                        author={feedback.author}
                        description={feedback.description}
                        role={feedback.role}
                        icon={feedback.icon.fixed.src}
                    />
                </FeedbackWrapper>
            ))}
        </Carousel>
    );
}
