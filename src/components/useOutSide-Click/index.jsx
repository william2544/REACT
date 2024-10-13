import { useEffect } from "react";

export default function UseOnclickOutSide(ref, hundler){
    useEffect(()=>{
        function listener(event){
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            return hundler(event)

        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return ()=>{
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }

    },[ref, hundler])
}