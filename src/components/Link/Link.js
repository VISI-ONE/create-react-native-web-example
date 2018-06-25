import React from 'react';
import { Text } from 'react-native';
import { Link as NativeLink } from 'react-router-native';
import { string, object, oneOfType, any, number, array } from 'prop-types';
import { isWeb } from '../../helpers';

const Link = ({
  to,
  children,
  style,
  className,
  onClick,
}) => {
  const clickProps = isWeb ? { onClick } : { onPress: onClick };
  return (
    <NativeLink to={to} className={isWeb && className} {...clickProps}>
      <Text style={style}>{children}</Text>
    </NativeLink>
  );
}

Link.propTypes = {
  to: oneOfType([object, string]).isRequired,
  children: any,
  style: oneOfType([object, string, number, array]),
  className: oneOfType([object, string, number, array]),
};

export default Link;
