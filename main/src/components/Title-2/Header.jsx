import styled from 'styled-components'

export const Header = styled.div`
    width: calc(100%-40px);
    padding: 0 20px;

    p {
        width: fit-content;
        border-bottom: #5E61E6 2px solid;
        padding-bottom: 10px;
        font-size:17px;
        margin-top: 30px;
        font-weight: bold;
        display: none;
        align-items: center;
        margin-bottom: 30px;
        width: 200px;

        a {
        text-decoration: none;
        color: #2E3192;
        font-weight: 600;
        cursor: pointer;
        margin: 0 5px 0 0;
        }
    }

    h1 {
        font-size: clamp(30px, calc(30px + 16 * (100vw - 320px)/760),40px);
        font-weight: 700;
        color: #001489;
        margin: 12px 0 35px;
        text-transform: uppercase;
    }
`;