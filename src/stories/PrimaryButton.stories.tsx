import type { Meta, StoryObj } from "@storybook/react-vite";
import { PrimaryButton } from "@/2025/ui/Button";

const meta = {
  title: "2025/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["yellow", "red", "blue", "disable", "ghost"],
      description: "Button color variant",
    },
    size: {
      control: "select",
      options: ["default", "ghost"],
      description: "Button size (ghost variant automatically uses ghost size)",
    },
    children: {
      control: "text",
      description: "Button content",
    },
    disabled: {
      control: "boolean",
      description: "Disable button",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    children: "Click me",
    variant: "yellow",
    size: "default",
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Yellow: Story = {
  args: {
    variant: "yellow",
    children: "Yellow Button",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
    children: "Red Button",
  },
};

export const Blue: Story = {
  args: {
    variant: "blue",
    children: "Blue Button",
  },
};

export const Disable: Story = {
  args: {
    variant: "disable",
    children: "Disabled Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const WithCustomClass: Story = {
  args: {
    variant: "blue",
    children: "Custom Class",
    className: "shadow-lg",
  },
};

export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <PrimaryButton variant="yellow">Yellow</PrimaryButton>
      <PrimaryButton variant="red">Red</PrimaryButton>
      <PrimaryButton variant="blue">Blue</PrimaryButton>
      <PrimaryButton variant="disable">Disabled</PrimaryButton>
      <PrimaryButton variant="ghost">Ghost</PrimaryButton>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    variant: "blue",
    children: "Interactive Button",
    onClick: () => alert("Button clicked!"),
  },
};
