const Card = ({img, title, description, button}) => {
    return (
        <div className="col-xs-12 g-col-sm-6 g-col-lg mg-3">
            <div className="card" style={{width:"18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{button}</a>
                </div>
            </div>
        </div>
    )
}