import { useColorMode } from "@vueuse/core";
import { createInjectionState } from "@vueuse/shared";



const [] = createInjectionState((isDark: 'dark' | 'light') => {
    const mode = useColorMode();

})