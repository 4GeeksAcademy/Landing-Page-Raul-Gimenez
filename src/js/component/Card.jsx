import React from "react";

const Card = ({img, title, description, button}) => {
    return (
        <div className="col-xs-12 col-sm-6 col-lg-3 mg-3 mt-3">
            <div className="card">
                <div className="ratio ratio-1x1">
                    <div className="w-100 h-100">
                        <img src={img} className="card-img-top img-fluid w-100 h-100" alt="..."/>
                    </div>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{button}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;