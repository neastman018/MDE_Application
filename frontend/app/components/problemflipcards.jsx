import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

// Styled component for the flip card
const FlipCard = styled(Box)({
    perspective: "1000px", // Gives the card a 3D effect
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20px',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
});

// Avoid passing isFlipped to the DOM element
const FlipCardInner = styled(Box)(({ isflipped, width, height }) => ({
    width: width || "30vw",
    height: height || "30vh",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isflipped ? "rotateY(180deg)" : "none",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const cardStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden", // Hides the back side when flipping
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow
};

const FlipCardFront = styled(Card)({
    ...cardStyles,
});

const FlipCardBack = styled(Card)({
    ...cardStyles,
    transform: "rotateY(180deg)",
});

export default function FlipCardComponent({post, width, height}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    const handleClicked = () => {
        if (post.link) { window.location.href = post.link; }
    };

    return (
        <FlipCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClicked}>
            <FlipCardInner isflipped={isFlipped} width={width} height={height}>
                {/* Front Side */}
                <FlipCardFront>
                    <CardContent sx = {{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100%'}}>
                        <Typography variant='h2' style={{ color: "#861F41", fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}>
                            {post.title}
                        </Typography>
                    </CardContent>
                </FlipCardFront>

                {/* Back Side */}
                <FlipCardBack>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography varient='body1' style={{ color: "#000", fontSize: '1.0em', textAlign: 'center' }}>
                            {post.description}
                        </Typography>
                    </CardContent>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    );
};