import {
  beautifulDayShadows,
  nightFeverShadows,
  rhythmNightShadows,
} from './shadows';

const defaults = {
  sideMenuWidthClose: '72px',
  sideMenuWidthOpen: '280px',
  topMenuHeight: '60px',
  sideMenuZIndex: 20,
  topMenuZIndex: 15,
  drawerWidth: '423px',
  largeDrawerWidth: '700px',
  drawerTopHeight: '86px',
};

const basicColors = {
  blackSabbath: '#040F17',
  theBlackKeys: '#091D25',
  blackFlag: '#1D242E',
  blackLips: '#282F3A',
  blackKeys: '#131D25',
  theBlackAngels: '#323945',
  blackEyedPeas: '#58606C',
  silverChair: '#79818E',
  macyGray: '#9FA6B1',
  silverstein: '#E8ECF1',
  barryWhite: '#F6F7FA',
  whitesnake: '#FAFBFC',
  whiteStripes: '#FFFFFF',
  purpleRain: '#7464DF',
  silversunPickups: '#D2D8E0',
  moodyBluesDay: '#097ACB',
  simplyRedDay: '#CA1C5C',
  yellowcardDay: '#FE7F00',
  greenDayDay: '#008552',
  purpleRainNightText: '#D0C9F3',
  moodyBluesNight: '#039FF4',
  simplyRedNight: '#F76593',
  yellowCardNight: '#FFAB00',
  greenDayNight: '#36B37E',
};

const inputsDefault = {
  errorBorder: '1px solid ' + basicColors.simplyRedDay,
  errorTextColor: basicColors.simplyRedDay,
  helperText: basicColors.macyGray,
  multiSelectSpanTextColor: basicColors.macyGray,
  backgroundHoverSelected: basicColors.purpleRain,
};

const tabsDefault = {
  borderBottom: '1px solid ' + basicColors.silversunPickups,
  indicatorBackgroundColor: basicColors.purpleRain,
  selectedTabColor: basicColors.purpleRain,
  disabledTabColor: '#FF0000',
  tabColor: basicColors.silverChair,
  tabHoverColor: basicColors.purpleRain,
  tabFocusColor: basicColors.purpleRain,
};

export const beautifulDayTheme = {
  ...defaults,
  ...basicColors,
  primary: '#7464DF',
  secondary: '#D0C9F3',
  info: '#097ACB',
  error: basicColors.simplyRedDay,
  success: '#008552',
  warning: '#FE7F00',
  contentBackground: '#F6F7FA',
  textColor: '#1D1F22',
  tooltipBackgroundColor: '#1D242E',
  tooltipColor: basicColors.whiteStripes,
  menuColors: {
    linkSelectedBackground: '#E8ECF1',
    linkNotSelectedText: '#707276',
    menuBackground: basicColors.whiteStripes,
  },
  inputColors: {
    ...inputsDefault,
    backgroundColorSearch: basicColors.whitesnake,
    placeholderColorSearch: basicColors.blackEyedPeas,
    background: basicColors.whiteStripes,
    inputLabel: basicColors.blackEyedPeas,
    inputText: basicColors.blackFlag,
    backgroundHover: basicColors.barryWhite,
    colorHoverSelected: basicColors.whiteStripes,
    labelText: basicColors.blackEyedPeas,
    boxShadowFocus: '0 0 0 2px #3f2acb',
    multiSelectSpanTextColor: basicColors.blackEyedPeas,
    themeSelectionLabelColor: basicColors.blackKeys,
  },
  toggleColor: {
    background: '#C1C8D7',
    backgroundChecked: '#7464DF',
    onFocusBoxShadow:
      '0 0 0 1px ' + basicColors.barryWhite + ', 0 0 0 2px #3f2acb',
    offFocusBoxShadow:
      '0 0 0 1px ' + basicColors.barryWhite + ', 0 0 0 2px #A8B2C7',
  },
  tableColor: {
    backgroundColor: basicColors.silverstein,
    backgroundColorSelected: 'rgba(116, 100, 223, 0.25)',
    cellColor: basicColors.blackFlag,
    headerCellColor: basicColors.whiteStripes,
    iconsColor: basicColors.whiteStripes,
    checkboxBackgroundColorHover: 'rgba(116, 100, 223, 0.04)',
    headerBackgroundColor: basicColors.purpleRain,
  },
  topMenu: {
    userNameColor: basicColors.blackSabbath,
    roleNameColor: basicColors.blackEyedPeas,
    emailIdColor: basicColors.blackKeys,
    contentDesc: basicColors.blackKeys,
    optionsSectionBackground: basicColors.barryWhite,
    divider: basicColors.silversunPickups,
    ContentHeading: basicColors.blackEyedPeas,
    avatarButtonBoxShadow: beautifulDayShadows.M,
  },
  filterMenu: {
    backgroundColor: '#FFFFFF',
    buttonClear: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
  },
  buttons: {
    borderRadius: '30px',
    primary: {
      color: basicColors.whiteStripes,
      backgroundColor: basicColors.purpleRain,
      boxShadow:
        '0px 4px 32px rgba(116, 100, 223, 0.14), 0px 16px 24px rgba(116, 100, 223, 0.1), 0px 2px 6px rgba(116, 100, 223, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.04)',
      activeBackgroundColor: '#5845D9',
      focusBoxShadow:
        '0px 4px 30px rgba(116, 100, 223, 0.5), 0 0 0 3px ' +
        basicColors.barryWhite +
        ', 0 0 0 5px #3f2acb',
    },
    secondary: {
      color: basicColors.purpleRain,
      backgroundColor: basicColors.whiteStripes,
      boxShadow: beautifulDayShadows.M,
      hoverBackgroundColor: basicColors.barryWhite,
      hoverBoxShadow: beautifulDayShadows.S,
      activeBackgroundColor: basicColors.silverstein,
      focusBoxShadow:
        '0px 4px 30px rgba(88, 96, 108, 0.3), 0 0 0 3px ' +
        basicColors.barryWhite +
        ', 0 0 0 5px ' +
        basicColors.purpleRain,
      disabledBoxShadow: '0px 4px 30px rgba(88, 96, 108, 0.3)',
      disabledHoverBackgroundColor: basicColors.whiteStripes,
    },
    tertiary: {
      color: basicColors.purpleRain,
      activeColor: '#5845D9',
    },
  },
  tabs: {
    ...tabsDefault,
  },
  stepper: {
    stepBackgroundColorActive: basicColors.purpleRain,
    stepBackgroundColorInActive: basicColors.whiteStripes,
    stepColorInActive: basicColors.blackEyedPeas,
    stepLabelColor: basicColors.blackEyedPeas,
    connectorColor: basicColors.silversunPickups,
  },
};

export const nightFeverTheme = {
  ...defaults,
  ...basicColors,
  primary: '#7464DF',
  secondary: '#D0C9F3',
  info: '#039FF4',
  error: '#F76593',
  success: '#008552',
  warning: '#FFAB00',
  contentBackground: '#1D242E',
  textColor: '#ffffff',
  tooltipBackgroundColor: '#ffffff',
  tooltipColor: 'black',
  menuColors: {
    linkSelectedBackground: basicColors.theBlackAngels,
    linkNotSelectedText: '#B8BBBF',
    menuBackground: basicColors.theBlackAngels,
  },
  inputColors: {
    ...inputsDefault,
    backgroundColorSearch: basicColors.blackEyedPeas,
    placeholderColorSearch: basicColors.silverstein,
    background: basicColors.blackLips,
    backgroundHover: basicColors.blackEyedPeas,
    inputLabel: basicColors.silverstein,
    inputText: basicColors.whiteStripes,
    colorHoverSelected: basicColors.whiteStripes,
    labelText: basicColors.silverstein,
    boxShadowFocus: '0 0 0 2px #A499EA',
    themeSelectionLabelColor: basicColors.whiteStripes,
  },
  toggleColor: {
    background: '#323945',
    backgroundChecked: '#7464DF',
    onFocusBoxShadow:
      '0 0 0 1px ' + basicColors.blackFlag + ', 0 0 0 2px #B1A5EC',
    offFocusBoxShadow:
      '0 0 0 1px ' +
      basicColors.blackFlag +
      ', 0 0 0 2px ' +
      basicColors.macyGray,
  },
  tableColor: {
    backgroundColor: basicColors.blackEyedPeas,
    backgroundColorSelected: 'rgba(116, 100, 223, 0.25)',
    cellColor: basicColors.whiteStripes,
    headerCellColor: basicColors.whiteStripes,
    iconsColor: basicColors.whiteStripes,
    checkboxBackgroundColorHover: 'rgba(116, 100, 223, 0.04)',
    headerBackgroundColor: basicColors.purpleRain,
  },
  topMenu: {
    userNameColor: basicColors.whiteStripes,
    roleNameColor: basicColors.silverstein,
    emailIdColor: basicColors.whiteStripes,
    optionsSectionBackground: basicColors.blackFlag,
    divider: basicColors.theBlackAngels,
    contentDesc: basicColors.whiteStripes,
    ContentHeading: basicColors.silverstein,
    avatarButtonBoxShadow: beautifulDayShadows.M,
  },
  filterMenu: {
    backgroundColor: '#323945',
    buttonClear: '#323945',
  },
  card: {
    backgroundColor: '#282f3a',
  },
  buttons: {
    borderRadius: '30px',
    primary: {
      color: basicColors.barryWhite,
      backgroundColor: basicColors.purpleRain,
      boxShadow: '0px 4px 30px rgba(116, 100, 223, 0.5)',
      activeBackgroundColor: '#A499EA',
      focusBoxShadow:
        '0px 4px 30px rgba(116, 100, 223, 0.5), 0 0 0 3px ' +
        basicColors.blackFlag +
        ', 0 0 0 5px #A499EA',
    },
    secondary: {
      color: basicColors.barryWhite,
      backgroundColor: basicColors.theBlackAngels,
      boxShadow: nightFeverShadows.M,
      hoverBackgroundColor: basicColors.theBlackAngels,
      hoverBoxShadow: nightFeverShadows.S,
      activeBackgroundColor: basicColors.blackEyedPeas,
      focusBoxShadow:
        nightFeverShadows.M +
        ', 0 0 0 3px ' +
        basicColors.blackFlag +
        ', 0 0 0 5px ' +
        basicColors.macyGray,
      disabledBoxShadow: '0px 4px 30px rgba(159, 166, 177, 0.2)',
      disabledHoverBackgroundColor: basicColors.theBlackAngels,
    },
    tertiary: {
      color: '#D0C9F3',
      activeColor: '#A192EC',
    },
  },
  tabs: {
    ...tabsDefault,
  },
  stepper: {
    stepBackgroundColorActive: basicColors.purpleRain,
    stepBackgroundColorInActive: basicColors.whiteStripes,
    stepColorInActive: basicColors.blackEyedPeas,
    stepLabelColor: basicColors.silverstein,
    connectorColor: basicColors.silversunPickups,
  },
};

export const rhythmNightTheme = {
  ...defaults,
  ...basicColors,
  primary: '#7464DF',
  secondary: '#D0C9F3',
  info: '#039FF4',
  error: '#F76593',
  success: '##008552',
  warning: '#FFAB00',
  menuBackground: basicColors.blackKeys,
  contentBackground: '#040F17',
  textColor: '#ffffff',
  tooltipBackgroundColor: '#ffffff',
  tooltipColor: 'black',
  menuColors: {
    linkSelectedBackground: basicColors.theBlackKeys,
    linkNotSelectedText: '#B8BBBF',
    menuBackground: basicColors.blackFlag,
  },
  inputColors: {
    ...inputsDefault,
    backgroundColorSearch: basicColors.theBlackAngels,
    placeholderColorSearch: basicColors.silverstein,
    background: basicColors.blackFlag,
    backgroundHover: basicColors.theBlackAngels,
    inputLabel: basicColors.silverstein,
    inputText: basicColors.whiteStripes,
    boxShadowFocus: '0 0 0 2px #A499EA',
    themeSelectionLabelColor: basicColors.whiteStripes,
  },
  toggleColor: {
    background: '#1D242E',
    backgroundChecked: '#7464DF',
    onFocusBoxShadow:
      '0 0 0 1px ' + basicColors.blackSabbath + ', 0 0 0 2px #B1A5EC',
    offFocusBoxShadow:
      '0 0 0 1px ' +
      basicColors.blackSabbath +
      ', 0 0 0 2px ' +
      basicColors.macyGray,
  },
  tableColor: {
    backgroundColor: basicColors.blackFlag,
    backgroundColorSelected: 'rgba(116, 100, 223, 0.25)',
    cellColor: basicColors.whiteStripes,
    headerCellColor: basicColors.whiteStripes,
    iconsColor: basicColors.whiteStripes,
    checkboxBackgroundColorHover: 'rgba(116, 100, 223, 0.04)',
    headerBackgroundColor: basicColors.purpleRain,
  },
  topMenu: {
    userNameColor: basicColors.whiteStripes,
    roleNameColor: basicColors.barryWhite,
    emailIdColor: basicColors.whiteStripes,
    optionsSectionBackground: basicColors.blackSabbath,
    divider: basicColors.theBlackAngels,
    contentDesc: basicColors.whiteStripes,
    ContentHeading: basicColors.barryWhite,
    avatarButtonBoxShadow: beautifulDayShadows.M,
  },
  filterMenu: {
    backgroundColor: '#323945',
    buttonClear: '#323945',
  },
  card: {
    backgroundColor: '#282f3a',
  },
  buttons: {
    borderRadius: '30px',
    primary: {
      color: basicColors.barryWhite,
      backgroundColor: basicColors.purpleRain,
      boxShadow: '0px 4px 30px rgba(116, 100, 223, 0.5)',
      activeBackgroundColor: '#A499EA',
      focusBoxShadow:
        '0px 4px 30px rgba(116, 100, 223, 0.5), 0 0 0 3px ' +
        basicColors.blackSabbath +
        ', 0 0 0 5px #A499EA',
    },
    secondary: {
      color: basicColors.barryWhite,
      backgroundColor: basicColors.blackFlag,
      boxShadow: rhythmNightShadows.M,
      hoverBackgroundColor: basicColors.blackFlag,
      hoverBoxShadow: 'none',
      activeBackgroundColor: basicColors.theBlackAngels,
      focusBoxShadow:
        rhythmNightShadows.M +
        ', 0 0 0 3px ' +
        basicColors.blackSabbath +
        ', 0 0 0 5px ' +
        basicColors.macyGray,
      disabledBoxShadow: '0px 4px 30px rgba(50, 57, 69, 0.5)',
      disabledHoverBackgroundColor: basicColors.blackFlag,
    },
    tertiary: {
      color: '#D0C9F3',
      activeColor: '#A192EC',
    },
  },
  tabs: {
    ...tabsDefault,
  },
  stepper: {
    stepBackgroundColorActive: basicColors.purpleRain,
    stepBackgroundColorInActive: basicColors.whiteStripes,
    stepColorInActive: basicColors.blackEyedPeas,
    stepLabelColor: basicColors.silverstein,
    connectorColor: basicColors.silversunPickups,
  },
};

export const ThemeType = typeof beautifulDayTheme;
