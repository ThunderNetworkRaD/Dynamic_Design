import { ColorScheme } from "../../index";

export interface Theme {
    colorScheme: "light" | "dark" | "auto" | "disabled";
    colors: ColorScheme;
    fontFamily: string;
    lineHeight: string;
    primaryColor: string;
    radius: string;
    spacing: string;
    shadows: string;
    headings: {
        fontFamily: string;
        fontWeight: string;
        sizes: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
        };
    };
};

export interface ColorSchemedTheme extends Theme {
    colorScheme: "light" | "dark" | "auto",
};

export interface UnColorSchemedTheme extends Theme {
    colorScheme: "disabled",
};