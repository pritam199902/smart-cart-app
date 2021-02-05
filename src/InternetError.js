export default function InternetError() {
  return (
    <div className="row mx-0 m-auto pt-5">
      <div className="col-lg-6 col-md-6 col-sm-8 m-auto">
        <div className="card m-auto">
          <div className="card-body text-center">
              <img src="/net0.png" style={styles.image}/>
              <h1 className="text-warning">No Internet!</h1>
              <h6 className="text-warning">Check your network connectivity</h6>
              {/* <button className="btn btn-info" onClick={()=>{window.location.reload()}} style={{fontSize : 17}}>Refresh <i className="fa fa-sync-alt"></i> </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
    image: {
      height: "auto",
      width: "100%",
      position: "relatve",
      margin: "auto",
    },
  };
  
