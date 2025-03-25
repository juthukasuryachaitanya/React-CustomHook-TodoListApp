
import { memo, useRef, useState } from "react";
import useTodo from "./usetodo";
import Eachtodo from "./eachtodo";



function Todolist() {
    var [todos, addtodo, deltodo,enable,clear,toggle,setToggle,ref1] = useTodo()
    var [newtodo, setNewtodo] = useState('')   
    return (
        <div style={{ marginLeft: "550px", width: "280px",marginTop:"50px" }} className="border border-2">
            <center><h1 className="text-danger">Todolist</h1></center>
            <div  className="d-flex justify-content-evenly">
                <div>
                    <input ref={ref1} type="text" onKeyUp={() => { enable() }} onChange={(e) => { setNewtodo(e.target.value) }}></input>
                </div>
                <div>
                    <button className="btn btn-primary btn-sm" onClick={() => {
                        addtodo(newtodo.toUpperCase())
                        setToggle(true)
                        clear()
                    }} disabled={toggle} >add todo</button>
                </div>
            </div>


            <div style={{ display: "flex", justifyContent: "center", width: "250px" }}>
                <ol  >
                    {
                        todos.map((todo, index) => {
                            return <Eachtodo todo={todo} key={index} index={index} deltodo={deltodo}></Eachtodo>
                        })
                    }
                </ol>
            </div>
        </div>

    )
}
export default Todolist