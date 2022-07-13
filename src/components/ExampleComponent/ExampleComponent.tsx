import { View, Text } from 'react-native';

type ExampleComponentProps = {
  showText?: boolean;
  name?: string;
};

const ExampleComponent = ({ showText }: ExampleComponentProps): JSX.Element => (
  <View>{showText ?? <Text>Dummy text</Text>}</View>
);

export default ExampleComponent;
