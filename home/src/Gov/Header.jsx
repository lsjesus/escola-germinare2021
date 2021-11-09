import styled from "styled-components"

export const Header = styled.div`
    width: calc(100%-40px);
    padding: 0 20px;

    p {
        font-size: clamp(12px, calc(12px + 4 * (100vw - 320px)/760) ,16px);
        margin-top: 30px;
        height: 48px;
        border-bottom: 5px solid #5E61E6;
        border-top: 5px solid #5E61E6;
        font-weight: bold;
        display: flex;
        align-items: center;

        a {
        text-decoration: none;
        color: #2E3192;
        font-weight: 600;
        cursor: pointer;
        margin: 0 5px;
        }
    }

    h1 {
        font-size: clamp(24px, calc(24px + 24 * (100vw - 320px)/760) ,48px);
        font-weight: 700;
        color: #29305c;
        margin: 40px 0;
    }
`;