function TodoItem() {
    
    let todoname="buy milk"
    let tododate="14-01-2024"
    return (


        <div className="container todo-row">

        <div className="row">
          <div className="col-6">
            {todoname}
          </div>
          <div className="col-4">
          {tododate}

          </div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        </div>

    )
}

export default TodoItem;