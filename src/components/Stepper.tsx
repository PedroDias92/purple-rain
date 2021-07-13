import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Stepper as MuiStepper } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';

export interface StepperProps {
  step: number;
  setStep: any;
  stepsLabels: string[];
  canChangeToStep: boolean;
}

const StepperWrapper = styled.div`
  .MuiPaper-root {
    background: ${({ theme }) => theme.contentBackground} !important;
    padding-left: 0;
  }

  .MuiStep-horizontal {
    padding: 0;
  }

  .MuiStepLabel-iconContainer {
    padding-right: 15px;
  }

  .MuiStepIcon-root {
    color: ${({ theme }) => theme.stepper.stepBackgroundColorInActive};
    height: 32px;
    width: 32px;
    box-shadow: 0px 10px 20px rgb(4 15 23 / 4%), 0px 2px 6px rgb(4 15 23 / 4%),
      0px 0px 1px rgb(4 15 23 / 4%);
    border-radius: 50%;
  }

  .Mui-disabled .MuiStepIcon-root .MuiStepIcon-text {
    fill: ${({ theme }) => theme.stepper.stepColorInActive};
  }

  .MuiStepIcon-active,
  .MuiStepIcon-completed {
    color: ${({ theme }) => theme.stepper.stepBackgroundColorActive} !important;
    background: radial-gradient(white, white, transparent);
  }

  .MuiStepLabel-labelContainer {
    font-family: Rawline;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
  }

  .MuiStepLabel-label {
    color: ${({ theme }) => theme.stepper.stepLabelColor} !important;
  }
  .MuiStepConnector-root {
    padding: 0 24px;
  }
  .MuiStepConnector-line {
    border-color: ${({ theme }) => theme.stepper.connectorColor} !important;
  }
`;

export function Stepper({
  step,
  stepsLabels,
  setStep,
  canChangeToStep,
}: StepperProps): ReactElement {
  return (
    <StepperWrapper>
      <MuiStepper activeStep={step}>
        {stepsLabels.map((child: any, index: number) => (
          <Step key={`${index}_${child}`}>
            <StepButton onClick={() => canChangeToStep && setStep(index)}>
              <StepLabel>{child}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </MuiStepper>
    </StepperWrapper>
  );
}
