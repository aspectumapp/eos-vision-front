import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

const Red = props => <span style={{ color: 'red' }} {...props} />;

const TableComponent = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <td>
            {property}
            {required ? <Red>*</Red> : null}
          </td>
          <td>{propType.name}</td>
          <td>{defaultValue}</td>
          <td>{description}</td>
        </tr>
      );
    }
  );

  return (
    <table>
      <thead>
      <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
      </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

const story = storiesOf('Modules | Checkbox / Checkbox', module);

story
  .addParameters({
    options: {
      showAddonPanel: true,
    },
  });

story
  .add('Basic usage', () => {
    return (
      <Checkbox
        onChange={action('onChange')}
      />
    );
  }, {
    info: {
      inline: true,
      source: false,
      text: `
Render simple checkbox
      `,
      TableComponent,
    },
  });

// story
//   .add('Icon as button', () => {
//     return (
//       <Icon
//         name='other'
//         as='button'
//         onClick={action('onClick')}
//       />
//     );
//   }, {
//     info: {
//       inline: true,
//       text: 'Handle onClick event',
//     },
//   });
