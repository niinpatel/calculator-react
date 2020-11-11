
import { useEffect } from 'react';

const useKeyPressed = (keys, action) => {
  useEffect(() => {
    const keyUp = (e) => keys.includes(e.key) &&  action(e.key) 
    window.addEventListener('keyup', keyUp);
    return () => window.removeEventListener('keyup', keyUp);
  }, [keys]);
}

export default useKeyPressed;