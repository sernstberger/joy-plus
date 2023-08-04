import * as React from 'react';
import Box from '@mui/joy/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function Carousel({ images = [] }: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
    // sx={{
    //    maxWidth: 400,
    //     flexGrow: 1
    //   }}
    >
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step: any, index: number) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  // height: 255,
                  display: 'block',
                  // maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <Typography>{images[activeStep].label}</Typography> */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="sm"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            endDecorator={<KeyboardArrowRight />}
          >
            Next
          </Button>
        }
        backButton={
          <Button
            size="sm"
            onClick={handleBack}
            disabled={activeStep === 0}
            startDecorator={<KeyboardArrowLeft />}
          >
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;
