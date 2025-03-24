import { memo } from "react"

var Eachtodo = memo(({ todo, index, deltodo }, key) => {
    console.log(todo)
    return <div className="d-flex justify-content-between gap-2 m-2">
        <div><li key={key}>{todo}
            
            </li></div> 
        <div><i onClick={() => { deltodo(index) }} class="bi bi-trash btn btn-outline-danger"></i></div>
    </div>

})
export default Eachtodo