import {componentWrapperDecorator, Meta, Story} from '@storybook/angular/';

import { HomeComponent as Home} from "./home.component";
import { TabComponent as Tab } from "../tab/tab.component";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";


export default {
    title: 'Home',
    component: Home,
    decorators: [
        moduleMetadata({
            //👇 Imports both components to allow component composition with Storybook
            declarations: [Home, Tab],
            imports: [CommonModule],
        }),
        //👇 Wraps our stories with a decorator
        componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
    ],
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
    props: args,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    tabs: [
        {
            name: 'tab 1',
            text: 'Texto do primeiro tab'
        },
        {
            name: 'tab 2',
            text: 'Texto do segundo tab'
        },
        {
            name: 'tab 3',
            text: 'Texto do terceiro tab'
        },
        {
            name: 'tab 4',
            text: 'Texto do quarto tab'
        }
    ],
};