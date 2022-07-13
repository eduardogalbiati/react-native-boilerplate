import React from 'react';
import { View, Text } from 'react-native';

type ExampleComponentProps = {
	showText?: boolean;
};

const defaultProps: ExampleComponentProps = {
	showText: false,
};

function ExampleComponent({ showText = false }: ExampleComponentProps) {
	return <View>{showText ?? <Text>Dummy text</Text>}</View>;
}

ExampleComponent.defaultProps = defaultProps;

export default ExampleComponent;
