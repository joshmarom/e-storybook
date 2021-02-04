import { default as Component } from 'elementor-app/ui/atoms/box';
import { examples } from 'e-storybook/stories-examples/box.js';

export default {
    title: 'Components/Ui/Atoms/Box',
    component: Component,
    parameters: {
        usage: {
            import: "import Box from 'elementor-app/ui/atoms/box'",
            examples: examples,
        }
    },
};

export * from '../../auto-components/box.stories';
export * from '../../custom-components/box.stories';
