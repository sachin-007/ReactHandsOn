function AddTodo() {
    return (
        <div className="container todo-row ">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" name="" id="" />
          </div>
          <div className="col-2">
            <button className="btn btn-success">Add</button>
          </div>
        </div>
        </div>
    );
    
    

}
export default AddTodo