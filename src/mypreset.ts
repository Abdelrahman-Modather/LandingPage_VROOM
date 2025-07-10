import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';


const customPreset = definePreset(Aura, {
  semantic: {
    primary: {
      // Defining a range of reds and oranges for the gradient effect
      50: '#FEE8E6', // Very light red
      100: '#FECDCC', // Light red
      200: '#FDA5A2', // Medium light red
      300: '#FB7185', // Coral/light orange-red
      400: '#F43F5E', // Medium red
      500: '#EF4444', // Red
      600: '#DC2626', // Darker red
      700: '#B91C1C', // Deep red
      800: '#991B1B', // Very deep red
      900: '#7F1D1D', // Darkest red
      950: '#450A0A', // Almost black-red
    },
    colorScheme: {
      light: {
        primary: {
          color: '#DC2626', // A strong red for primary elements
          inverseColor: '#ffffff', // White for inverse elements (e.g., text on primary background)
          hoverColor: '#EF4444', // Lighter red for hover
          activeColor: '#B91C1C', // Deeper red for active
        },
        highlight: {
          background: '#FFFFFF', // White background
          focusBackground: '#FFF0EB', // Very light orange for focus background
          color: '#000000', // Black text for highlights
          focusColor: '#000000', // Black text for focus highlights
        },
        // Main application background and text colors
        surface: {
          background: '#ffffff', // White background
          color: '#000000', // Black for main text
        },
        // Specific text colors for different shades in light mode
        text: {
          default: '#000000', // Black for general text
          muted: '#4B5563', // A darker gray for muted text
        },
        border: {
          color: '#E5E7EB', // Light gray for borders
        },
      },
      dark: {
        primary: {
          color: '#FEE8E6', // A very light red/orange for primary elements
          inverseColor: '#1A1A1A', // Dark gray/black for inverse elements
          hoverColor: '#FECDCC', // Slightly lighter for hover
          activeColor: '#FDA5A2', // Slightly darker for active
        },
        highlight: {
          background: 'rgba(25, 25, 25, .8)', // Darker translucent background
          focusBackground: 'rgba(40, 40, 40, .9)', // Slightly lighter translucent focus background
          color: '#ffffff', // White for highlight text
          focusColor: '#ffffff', // White for highlight focus text
        },
        // Main application background and text colors
        surface: {
          background: '#000000', // Black background
          color: '#ffffff', // Explicitly setting white for main text
        },
        // Specific text colors for different shades in dark mode
        text: {
          default: '#ffffff', // White for general text
          muted: '#A0A0A0', // Medium gray for muted text
          // You might want an even darker gray for less prominent text if needed
          // e.g., veryMuted: '#606060',
        },
        border: {
          color: '#374151', // Dark gray for borders
        },
      },
    },
  },
});


export {customPreset}