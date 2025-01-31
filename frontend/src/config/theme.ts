const theme = {
  token: {
    colorPrimary: '#19666D', // Caribbean Current-30
    colorPrimaryHover: '#2FA2AE', // Lighter teal hover
    colorSecondary: '#DFA126', // Harvest Gold-60
    colorText: '#212121', // Main text (gray-13)
    colorTextSecondary: '#424242', // Secondary text (gray-30)
    colorBorder: '#DBDBDB', // Border (gray-90)
    borderRadius: 4, // Default border-radius
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  components: {
    Button: {
      colorPrimary: '#19666D',
      colorPrimaryHover: '#2FA2AE',
      borderRadius: 8,
    },
    Input: {
      colorBgContainer: '#F2F2F2', // Gray neutral-95
      colorBorder: '#DBDBDB', // Gray neutral-90
      colorTextPlaceholder: '#757575', // Placeholder text (gray-50)
    },
    Menu: {
      itemSelectedBg: 'rgba(32, 141, 214, 0.151)',
      itemColor: '#212121',
      itemSelectedColor: '#19666D',
    },
  },
};

export default theme;
