import React from "react";
import { HeroImageDiv } from "./Post.styles";
import Img from "gatsby-image";
import { Spring } from "react-spring/renderprops";

export default function HeroImage({ post }) {
    return (
        <Spring from={{ transform: "translate3d(0,40px,0)" }} to={{  transform: "translate3d(0,0px,0)" }}>
            {(styles) => (
                <HeroImageDiv style={styles}>
                    <Img fluid={post.heroImage.fluid} />
                </HeroImageDiv>
            )}
        </Spring>
    );
}
