import { ref, Ref } from "vue";

export function useAutoScroll(el: Ref<HTMLElement | undefined>) {

    const isStart = ref(false)

    const paly = () => {}
    const stop = () => {}

    return {
      paly,
      stop,
    };
}
