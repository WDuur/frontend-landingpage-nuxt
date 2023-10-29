import { ref } from 'vue'

const stack = ref<string>('ik ben een allround frontend developer');
const stackCheck =ref<boolean>(false);
const typeCheck =ref<boolean>(false);
 
export function useStack() {

    const setStack = (newStack: string) => {
      stack.value = newStack;
      stackCheck.value = true;
      console.log('>>>>>>', newStack, stack)
    }

    const typeScriptCheck = (stack: string) => {
      typeCheck.value  = stack === 'angular' ? true : false
    }

    return {
      setStack,
      stack,
      stackCheck,
      typeScriptCheck,
      typeCheck,
    };
  }