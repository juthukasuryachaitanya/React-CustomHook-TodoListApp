import  { useCallback, useRef, useState } from "react"
export default  function useTodo(){
     var [items,setItems]=useState(["SURYA","CHAITANYA","EDUPOLY","REACTjs"])
     var [toggle, setToggle] = useState(true)
     var ref1 = useRef()
     function addtodo(newtodo){
         setItems((prev)=>{
            return([...prev,newtodo])
         })
      }
      var deltodo=useCallback((index)=>{
          setItems((prev)=>{
            prev.splice(index,1)
            return[...prev]
          })
      },[])

      function enable() {
        setToggle(false)
    }
    function clear(){
        ref1.current.value=" "
    }
      return ([items,addtodo,deltodo,enable,clear,toggle,setToggle,ref1])
}
