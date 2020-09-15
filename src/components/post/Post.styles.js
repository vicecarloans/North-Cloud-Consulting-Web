import styled from "styled-components"
import { device } from 'utils/device'

export const HeroImageDiv = styled.div`
    max-height: 450px;
    @media ${device.mobileS} {
        max-width: 300px;
        margin: -40px auto 80px auto;
    }
    @media ${device.mobileL} {
        max-width: 400px;
        margin: -40px auto 80px auto;
    }
    @media ${device.tablet} {
        max-width: 720px;
        margin: -40px auto 80px auto;
    }
    @media ${device.laptop} {
        max-width: 950px;
        margin: -100px auto 80px auto;
    }
`;