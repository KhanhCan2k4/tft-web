export default function Banner({ banner, handleShow , handelPriority, handleDelete}) {
  const options = [];

  for (let i = 1; i <= 10; i++) {
    options.push(
      <option defaultValue={i} selected={i === banner.priority} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="banner mb-4 col-md-12">
      <h4>#{banner.priority}</h4>
      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid" src={"http://localhost:8000/" + banner.img} />
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-12 my-3">
              <button onClick={() => handleShow(banner)} className="btn btn-danger">Thay ảnh</button>
            </div>
            <div className="col-12 my-3">
              <button onClick={(e) => (e.target.textContent = "Đang tải...") && handleDelete(banner.id)} className="btn btn-warning">Xoá ảnh</button>
            </div>
            <div className="col-12 my-3">
              <div className="input-group mb-3">
                <select onChange={(e) => handelPriority(e.target.value, banner.id)} title="Vị trí" className="form-select">
                  {options}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
