import { PropType } from "vue";

export const props = {
  cover: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  tag: {
    type: Array as PropType<Array<String>>,
    required: true,
  },
};
