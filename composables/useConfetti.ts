import { ref } from 'vue'
import { useStack } from "../composables/useStack"; 

const { setStack, typeScriptCheck } = useStack();

const fire =ref<boolean>(false);
const stackToFire = ref<string>('idle')

export function useConfetti() {

  const setFire = (stack: string) => {
    fire.value = true;
    stackToFire.value = stack;
    typeScriptCheck(stack)
    switch(stack) {
      case "react":
        setStack("Ik ben een React-rocket");
        break;
      case "angular":
        setStack("Ik hou van Angular actie");
        break;
      case "vue":
        setStack("Ik ben een Vue vechter");
        break;
      default:
        break;
    }
    setTimeout(() => {
      fire.value = false;
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000);

  }

  return {
    setFire,
    fire,
    stackToFire,
  };
}