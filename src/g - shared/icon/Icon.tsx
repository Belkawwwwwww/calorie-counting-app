import React, {memo, SVGProps} from "react";

interface IconProps {
    svg: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const Icon = memo(
    ({svg, ...otherProps}: IconProps) => (
        <svg {...otherProps}/>
    )
)