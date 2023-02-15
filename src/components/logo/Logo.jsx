import React from "react";

// function Logo({ type = "default" }) {
//     return (
//         Prop == "default" ? Blqlqlqlqqlq : blqlqlq
//         <img src="/images/logo.svg" alt="Logo"></img>
//     );
// }

export default function Logo({ type = "default"}) {
    const defaultLogoUrl = " ./images/logo.svg";
    const mutedLogoUrl = " ./images/logo-muted.svg";

    if (type == "default") {
        return React.createElement("img", { src: defaultLogoUrl }, null);
    }

    return React.createElement("img", { src: mutedLogoUrl }, null);
    }