import React from 'react';
import { storiesOf } from '@storybook/react';
import * as BaseExamples from './base/example';
import * as ObjectHomeExamples from './object-home/example';
import * as RecordHomeExamples from './record-home/example';
import * as RecordHomeVerticalExamples from './record-home-vertical/example';
import * as RelatedListExamples from './related-list/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import DocsPage from '../../../.storybook/components/DocsPage';
import Docs from './docs.mdx';

const examples = [
  BaseExamples,
  ObjectHomeExamples,
  RecordHomeExamples,
  RecordHomeVerticalExamples,
  RelatedListExamples
];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Page Headers', module).add(
  'Kitchen Sink',
  () =>
    kitchenSink.map((element, idx) =>
      element.map(({ label, component }) => (
        <StoryFrame
          component={component}
          label={label}
          key={`kitchen-sink-${label}-${idx}`}
        />
      ))
    ),
  {
    docs: {
      page: () => <DocsPage title="Page Headers" Docs={Docs} />
    }
  }
);
