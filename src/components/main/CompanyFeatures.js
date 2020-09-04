import React from "react";
import { Typography } from "antd";
import { CompanyFeaturesDiv } from "./Main.styles";
import { Transition } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const { Title } = Typography;

export default function CompanyFeatures({ data }) {
    return (
        <div>
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <CompanyFeaturesDiv>
                        <Transition
                            items={isVisible}
                            from={{ opacity: 0 }}
                            enter={{ opacity: 1 }}
                            leave={{ opacity: 0 }}
                        >
                            
                            {(visible) =>
                                visible &&
                                ((props) => (
                                    <Title style={props} level={5}>
                                        {data.featureTitle}
                                    </Title>
                                ))
                            }
                        </Transition>
                    </CompanyFeaturesDiv>
                )}
            </VisibilitySensor>
        </div>
    );
}
