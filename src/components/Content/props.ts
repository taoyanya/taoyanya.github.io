export const baseProps = {
  color: {
    type: String,
    required: true,
  },
};

export const textProps = {
  ...baseProps,
};

export const titleProps = {
  title: {
    type: String,
    required: true,
  },
  ...baseProps,
};

export const connectionProps = {
  ...baseProps,
};

export const educationProps = {
  ...baseProps,
};

export const projectProps = {
  ...baseProps,
};

export const experienceProps = {
  ...baseProps,
};

export const props = {
  ...baseProps,
};

export const awardProps = {
  ...baseProps,
};
