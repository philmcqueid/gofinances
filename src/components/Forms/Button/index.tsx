import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

// Renderização do componente
export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
