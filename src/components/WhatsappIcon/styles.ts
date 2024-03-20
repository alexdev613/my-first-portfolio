import styled from "styled-components";

export const Icon = styled.a`
    position: fixed;
    bottom: 65px;
    right: 30px;
    font-size: 30px;
    background-color: #01e675;
    color: #fff;
    border-radius: 50%;
    padding: 8px;
    width: 50px;
    height: 50px;
    text-align: center;
    text-decoration: none;
    z-index: 100;
    box-shadow: 2px 2px 2px #c0bdbd;
    transition: background-color 0.3s, color 0.3s, font-weight 0.3s;

    &:hover {
        background-color: #fff;
        color: #029e3b;
        font-weight: 900;
        box-shadow: 2px 2px 20px #5fe690;
    }
`;