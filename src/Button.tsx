import React, { ReactElement } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { switchProp, ifProp } from 'styled-tools';
import { beautifulDayTheme } from './styles/themes';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type styledButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
};

const StyledButton = styled.button<styledButtonProps>`
  border-radius: ${(props) => props.theme.buttons.borderRadius};
  border: none;
  font-family: Rawline;
  font-weight: 500;
  white-space: nowrap;

  ${switchProp('variant', {
    primary: css`
      color: ${(props) => props.theme.buttons.primary.color};
      background-color: ${(props) =>
        props.theme.buttons.primary.backgroundColor};
      box-shadow: ${(props) => props.theme.buttons.primary.boxShadow};
      &:focus {
        outline: none;
      }
      &:focus-visible {
        box-shadow: ${(props) => props.theme.buttons.primary.focusBoxShadow};
      }
      &:hover {
        cursor: pointer;
        box-shadow: none;
      }
      &:active {
        background-color: ${(props) =>
          props.theme.buttons.primary.activeBackgroundColor};
        box-shadow: none;
      }
    `,
    secondary: css`
      color: ${(props) => props.theme.buttons.secondary.color};
      background-color: ${(props) =>
        props.theme.buttons.secondary.backgroundColor};
      box-shadow: ${(props) => props.theme.buttons.secondary.boxShadow};
      &:focus {
        outline: none;
      }
      &:focus-visible {
        box-shadow: ${(props) => props.theme.buttons.secondary.focusBoxShadow};
      }
      &:hover {
        cursor: pointer;
        background-color: ${(props) =>
          props.theme.buttons.secondary.hoverBackgroundColor};
        box-shadow: ${(props) => props.theme.buttons.secondary.hoverBoxShadow};
      }
      &:active {
        background-color: ${(props) =>
          props.theme.buttons.secondary.activeBackgroundColor};
        box-shadow: none;
      }
    `,
    tertiary: css`
      color: ${(props) => props.theme.buttons.tertiary.color};
      background-color: transparent;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        text-decoration-line: underline;
        text-underline-offset: 3px;
      }
      &:hover {
        cursor: pointer;
        text-decoration-line: underline;
        text-underline-offset: 3px;
      }
      &:active {
        color: ${(props) => props.theme.buttons.tertiary.activeColor};
        text-decoration-line: underline;
        text-underline-offset: 3px;
      }
    `,
  })}

  ${ifProp(
    'disabled',
    css`
      opacity: 0.5;
      box-shadow: ${(button: styledButtonProps) =>
        button.variant === 'secondary'
          ? (props) => props.theme.buttons.secondary.disabledBoxShadow
          : 'none'};
      background-color: ${(button: styledButtonProps) =>
        button.variant === 'secondary'
          ? (props) =>
              props.theme.buttons.secondary.disabledHoverBackgroundColor
          : ''};
      &:hover {
        cursor: not-allowed;
        text-decoration-line: none;
        box-shadow: ${(button: styledButtonProps) =>
          button.variant === 'secondary'
            ? (props) => props.theme.buttons.secondary.disabledBoxShadow
            : 'none'};
        background-color: ${(button: styledButtonProps) =>
          button.variant === 'secondary'
            ? (props) =>
                props.theme.buttons.secondary.disabledHoverBackgroundColor
            : ''};
      }
    `
  )}

	${switchProp('size', {
    large: css`
      font-size: 15px;
      line-height: 22px;
      height: ${(button: styledButtonProps) =>
        button.variant === 'tertiary' ? '' : '50px'};
      padding: ${(button: styledButtonProps) =>
        button.variant === 'tertiary' ? ' 0px' : '11px 36px 17px'};
    `,
    medium: css`
      font-size: 13px;
      line-height: 18px;
      height: ${(button: styledButtonProps) =>
        button.variant === 'tertiary' ? '' : '40px'};
      padding: ${(button: styledButtonProps) =>
        button.variant === 'tertiary' ? ' 0px' : '10px 28px 13px'};
    `,
    small: css`
      font-size: 11px;
      line-height: 16px;
      height: ${(button: styledButtonProps) =>
        button.variant === 'tertiary' ? '' : '30px'};
      padding: ${(button: styledButtonProps) =>
        button.variant === 'tertiary' ? ' 0px' : '6px 20px 8px'};
    `,
  })}
`;

export const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  ...props
}: ButtonProps): ReactElement => {
  return (
    <ThemeProvider theme={beautifulDayTheme}>
      <StyledButton
        variant={variant}
        size={size}
        disabled={disabled}
        {...props}
      >
        {label}
      </StyledButton>
    </ThemeProvider>
  );
};
