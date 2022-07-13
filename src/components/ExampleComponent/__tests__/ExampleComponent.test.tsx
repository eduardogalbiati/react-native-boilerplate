import * as React from 'react';
import ReactTestRenderer  from 'react-test-renderer';

import ExampleComponent from '../ExampleComponent';
import { withText, withoutText } from './mock';

describe('<ExampleComponent /> Component', () => {
  it(`renders without props`, () => {
    const tree = ReactTestRenderer.create(<ExampleComponent />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders with text`, () => {
    const tree = ReactTestRenderer.create(<ExampleComponent {...withText} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders without text`, () => {
    const tree = ReactTestRenderer
      .create(<ExampleComponent {...withoutText} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
