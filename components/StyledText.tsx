import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

type FontWeight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

interface StyledTextProps extends TextProps {
  weight?: FontWeight;
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
}

 const fontMap: Record<FontWeight, string> = {
  light: 'BricolageGrotesque_300Light',
  regular: 'BricolageGrotesque_400Regular',
  medium: 'BricolageGrotesque_500Medium',
  semibold: 'BricolageGrotesque_600SemiBold',
  bold: 'BricolageGrotesque_700Bold',
  extrabold: 'BricolageGrotesque_800ExtraBold',
};

export const StyledText: React.FC<StyledTextProps> = ({
  weight = 'regular',
  style,
  children,
  ...props
}) => {
  const fontFamily = fontMap[weight] || fontMap.regular;

  return (
    <Text style={[{ fontFamily }, style]} {...props}>
      {children}
    </Text>
  );
};

