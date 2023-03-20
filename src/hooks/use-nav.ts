import { Ref, ref } from "vue";

interface UseNavReturn {
  nav: Ref<string>;
  setNav: (raw: string) => void;
}

export function useNav(raw: string): UseNavReturn {
  const nav = ref(raw);
  function setNav(raw: string) {
    nav.value = raw;
  }

  return {
    nav,
    setNav,
  };
}
