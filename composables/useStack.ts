import { ref } from 'vue'

const stack = ref<string>('idle');
export function useStack() {

    const setStack = (newStack: string) => {
      stack.value = newStack;
    }
    
    return {
      setStack,
      stack,
    };
  }