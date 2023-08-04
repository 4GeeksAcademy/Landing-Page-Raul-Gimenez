import React from "react";

const Card = ({img, title, description, button}) => {
    return (
        <div className="col-xs-12 col-sm-6 col-lg-3 mg-3 mt-3">
            <div className="card h-100">
                <div className="ratio ratio-1x1">
                    <div className="w-100 h-100">
                        <img src={img} className="card-img-top w-100 h-100" alt="..."/>
                    </div>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="d-flex justify-content-center border bg-grey">
                    <a href="#" className="m-3 w-50 btn btn-primary">{button}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;