import React from "react";

const Card = ({img, title, description, button}) => {
    return (
        <div className="col-xs-12 col-sm-6 col-lg-3 mg-3 mt-3">
            <div className="card">
                <img src={img} className="card-img-top ratio" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{button}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;