import styled from 'styled-components';
import { Image } from '../../image';
import Link from 'next/link';
export const StyledImage = styled(Image)`
       img {
           width: 150px !important;
           height: auto !important;
       }
   `;
export const LogoLink = styled(Link)`
    display: flex;
    flex-direction: column;
    color: black;
    text-decoration: none;
    padding-left: 6px;
    margin-top: 15px;
    width: 150px;
    cursor: pointer;
    @media (max-width: 480px) {
        font-size: 10px;
    }
    @media (max-width: 320px) {
        /* font-size: 10px; */
        width: 100px;
        margin-top: 7px;
    }
`;
