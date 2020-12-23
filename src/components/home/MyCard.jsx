import React, { useState, useEffect, useCallback } from "react";

const MyCard = ({project}) => {
    return (
        <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body row">
                    <img className="img-fluid rounded col-md-3" src={project.image}/>
                    <div className="col-md-9">
                        <h5 className="card-title">{project.title}</h5>
                        <p>
                        <a
                                href={project.url}
                                className="btn btn-outline-secondary mr-3"
                                >
                                App Store
                        </a>
                        </p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default MyCard;