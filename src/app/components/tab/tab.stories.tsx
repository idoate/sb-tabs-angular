import { Meta, Story } from '@storybook/angular';

import { TabComponent as Tab } from './tab.component';

export default {
    title: 'Tab',
    component: Tab,
    argTypes: {
        textButton: { control: 'text' },
        index: { control: 'number' },
        onClick: {},
    },
} as Meta;

export const Primary: Story = (args) => ({
    props: args,
});

Primary.args = {
    tabName: 'tab 1',
    tabText: 'Texto do primeiro tab',
};

export const Secondary : Story = (args) => ({
    props: args,
});

Secondary.args = {
    tabName: 'tab 2',
    tabText: 'Texto do segundo tab',
};
