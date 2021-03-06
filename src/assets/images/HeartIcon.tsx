import React from 'react';
import { SvgCss } from 'react-native-svg';

import { SVGComponent } from "types/types"

export default ({ fill, width, height, outline = fill }: SVGComponent) => {
    const xml = `
    <svg width="25" height="22" viewBox="0 0 25 22" fill=${fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.0767 2.99419C21.5233 2.44061 20.8664 2.00147 20.1433 1.70187C19.4202 1.40226 18.6452 1.24805 17.8625 1.24805C17.0798 1.24805 16.3048 1.40226 15.5817 1.70187C14.8586 2.00147 14.2016 2.44061 13.6483 2.99419L12.5 4.14252L11.3517 2.99419C10.234 1.87652 8.71812 1.24863 7.1375 1.24863C5.55688 1.24863 4.041 1.87652 2.92333 2.99419C1.80566 4.11186 1.17776 5.62774 1.17776 7.20836C1.17776 8.78898 1.80566 10.3049 2.92333 11.4225L4.07166 12.5709L12.5 20.9992L20.9283 12.5709L22.0767 11.4225C22.6302 10.8692 23.0694 10.2122 23.369 9.48916C23.6686 8.76608 23.8228 7.99105 23.8228 7.20836C23.8228 6.42566 23.6686 5.65064 23.369 4.92756C23.0694 4.20448 22.6302 3.54751 22.0767 2.99419Z" fill=${fill} stroke=${outline} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;
    return (
        <SvgCss
            xml={xml}
            width={width || '100%'}
            height={height || '100%'}
            fill={fill}
        />
    );
};
