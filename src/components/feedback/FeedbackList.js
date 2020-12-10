import React from "react";
import { Carousel } from "antd";
import Feedback from "./Feedback";
import { FeedbackWrapper } from "./Feedback.styles";
import {isMobileOnly, isTablet} from "react-device-detect";

export default function FeedbackList({ feedbacks, columnCount }) {
    let slidesToScroll = 0
    let slidesToShow = 0
    if(isMobileOnly){
        slidesToScroll = 1
        slidesToShow = 1
    }
    if(isTablet) {
        slidesToScroll = 2
        slidesToShow = 2
    }
    const settings = {
        autoplay: true,
        dots: false,
        infinite: feedbacks.length > 3,
        draggable: true,
        swipe: true,
        slidesToScroll: slidesToScroll > 0 ? slidesToScroll : columnCount,
        slidesToShow: slidesToShow > 0 ? slidesToShow: columnCount,
    };
    return (
        <Carousel {...settings} className="north-cloud-carousel">
            {feedbacks.map((feedback, i) => (
                <FeedbackWrapper key={i}>
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
