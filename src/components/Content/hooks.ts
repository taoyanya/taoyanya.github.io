import { Ref } from "vue";

export const useStrongText = (
  textList: Ref<Element[] | undefined>,
  color: string
) => {
  if (textList.value) {
    textList.value.forEach((text) => {
      const strongList = text.querySelectorAll("strong");
      strongList.forEach((strong) => {
        strong.style.color = color;
        strong.style.fontWeight = "normal";
      });
    });
  }
};
