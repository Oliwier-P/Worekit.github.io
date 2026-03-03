import { icons } from "./index.js";

// eslint-disable-next-line react/prop-types
export const Icon = ({ name, className }) => {
    const Component = icons[name];

    if (!Component) return null;

    return <Component className={className} />;
};