import React, { useState, useEffect, useCallback } from "react";

const MyPodCard = ({pod}) => {
    return (
        <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body row">
                    <img className="col-md-3" src="https://eladnava.com/content/images/2016/10/cocoapods-1.jpg"/>
                    <div className="col-md-9">
                        <h5 className="card-title">{pod.title}</h5>
                        <p>
                        <a
                                href={pod.url}
                                className="btn btn-outline-secondary mr-3"
                                >
                                Visit
                        </a>
                        </p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default MyPodCard;