import { Meta, StoryObj } from '@storybook/react';

import { RecordTableEmptyStateNoRecordAtAll } from '@/object-record/record-table/empty-state/components/RecordTableEmptyStateNoRecordAtAll';
import { RecordTableScope } from '@/object-record/record-table/scopes/RecordTableScope';
import { SnackBarProviderScope } from '@/ui/feedback/snack-bar-manager/scopes/SnackBarProviderScope';
import { ComponentDecorator } from 'twenty-ui';
import { MemoryRouterDecorator } from '~/testing/decorators/MemoryRouterDecorator';
import { ObjectMetadataItemsDecorator } from '~/testing/decorators/ObjectMetadataItemsDecorator';
import { RecordTableDecorator } from '~/testing/decorators/RecordTableDecorator';
import { graphqlMocks } from '~/testing/graphqlMocks';

const meta: Meta = {
  title: 'Modules/ObjectRecord/RecordTable/RecordTableEmptyStateNoRecordAtAll',
  component: RecordTableEmptyStateNoRecordAtAll,
  decorators: [
    ComponentDecorator,
    MemoryRouterDecorator,
    ObjectMetadataItemsDecorator,
    RecordTableDecorator,
    (Story) => (
      <SnackBarProviderScope snackBarManagerScopeId="snack-bar-manager">
        <RecordTableScope
          recordTableScopeId="persons"
          onColumnsChange={() => {}}
        >
          <Story />
        </RecordTableScope>
      </SnackBarProviderScope>
    ),
  ],
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof RecordTableEmptyStateNoRecordAtAll>;

export const Default: Story = {};