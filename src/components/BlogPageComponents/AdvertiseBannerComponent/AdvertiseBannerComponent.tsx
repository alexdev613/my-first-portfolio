import React from "react";
import styled from "styled-components"

const AdvertiseBanner = styled.div`
  display: flex;
  margin-top: 1.25rem;
  background-color: whitesmoke;

  img {
    object-fit: fill;
    width: 100%;
  }
`;

interface ImageProps {
  src: string;
}

const AdvertiseBannerComponent: React.FC<ImageProps> = ({ src }) => {
    return (
        <>
            <AdvertiseBanner>
                <img src={src} alt="" />
            </AdvertiseBanner>
        </>
    )
}

export default AdvertiseBannerComponent;