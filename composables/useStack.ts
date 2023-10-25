import { ref } from 'vue'

const stack = ref<string>('ik ben een allround frontend developer');
const stackCheck =ref<boolean>(false);

export function useStack() {

    const setStack = (newStack: string) => {
      stack.value = newStack;
      stackCheck.value = true;
    }
    
    return {
      setStack,
      stack,
      stackCheck,
    };
  }