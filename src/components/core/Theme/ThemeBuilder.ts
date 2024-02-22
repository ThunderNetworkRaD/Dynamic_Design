import {
    DefaultColorScheme,
    type ColorScheme,
    type Theme,
} from '../../../index';

type ThemeBuilderOptions = Partial<Theme & {
    colors: Partial<ColorScheme>;
}>;

export class ThemeBuilder {
    colorScheme: "light" | "dark" | "auto" | "disabled" = "auto";
    colors: ColorScheme = DefaultColorScheme;
    fontFamily = "Arial, sans-serif";
    lineHeight = "1.6";
    primaryColor = "blue";
    radius = "4px";
    spacing = "16px";
    shadows = "0px 4px 12px rgba(0, 0, 0, 0.1)";
    headings = {
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        sizes: {
            h1: "2em",
            h2: "1.5em",
            h3: "1.17em",
            h4: "1em",
            h5: ".83em",
            h6: ".67em",
        },
    };

    constructor(options: ThemeBuilderOptions) {
        this.colorScheme = options.colorScheme || this.colorScheme;
        this.colors = options.colors ? { ...this.colors, ...options.colors } : this.colors;
        this.fontFamily = options.fontFamily || this.fontFamily;
        this.lineHeight = options.lineHeight || this.lineHeight;
        this.primaryColor = options.primaryColor || this.primaryColor;
        this.radius = options.radius || this.radius;
        this.spacing = options.spacing || this.spacing;
        this.shadows = options.shadows || this.shadows;
        this.headings = options.headings ? { ...this.headings, ...options.headings } : this.headings;
    }
}
