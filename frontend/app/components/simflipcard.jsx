import React, { useState } from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
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
const FlipCardInner = styled(Box)(({ isflipped }) => ({
    width: "45vw",
    height: "25vw",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isflipped ? "rotateY(180deg)" : "none",
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    paddingBottom: '20px',
}));

const cardStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden", // Hides the back side when flipping
};

// Styled components for the front and back sides of the flip card
const FlipCardFront = styled(Card)({
    ...cardStyles,
});

const FlipCardBack = styled(Card)({
    ...cardStyles,
    transform: "rotateY(180deg)",
});

export default function SimFlipCard({ post }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    const handleClicked = () => {
    };

    return (
        <FlipCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClicked}>
            <FlipCardInner isflipped={isFlipped}>
                {/* Front Side */}
                <FlipCardFront>
                <Typography variant="h5" sx={{ padding: 2, fontWeight: 'bold', textAlign:"center" }}>
                    {post.frontTitle}
                </Typography>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: 5 }}>
                        <Box
                            component="img"
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover', // Ensures the image covers the entire area without stretching
                            }}
                            alt=""
                            src={post.frontPicture}
                        />
                    </CardContent>
                </FlipCardFront>

                {/* Back Side */}
                <FlipCardBack>
                    <Typography variant="h5" sx={{ padding: 2, fontWeight: 'bold', textAlign:"center" }}>
                        {post.backTitle}
                    </Typography>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: 3 }}>
                        <Box
                            component="img"
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover', // Ensures the image covers the entire area without stretching
                            }}
                            alt=""
                            src={post.backPicture}
                        />
                    </CardContent>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    );
}
