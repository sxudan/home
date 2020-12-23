import React, { useState, useEffect, useCallback } from "react";
import {projectHeading} from "../../editable-stuff/configurations.json";
import MyCard from "./MyCard";
import MyPodCard from "./MyPodCard";
import axios from "axios";

const MyProject = () => {

    const [projectsArray, setProjectsArray] = useState([]);
    const [podsArray, setPodsArray] = useState([]);

  const handleRequest1 = useCallback((e) => {
    axios
      .get("https://nepmeds-f877f-default-rtdb.firebaseio.com/projects.json")
      .then((response) => {
        // handle success
        // console.log(response.data.slice(0, 4));
        return setProjectsArray(response.data);
      })
      .catch((error) => {
        // handle error
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  }, []);

  const handleRequest2 = useCallback((e) => {
    axios
      .get("https://nepmeds-f877f-default-rtdb.firebaseio.com/pods.json")
      .then((response) => {
        // handle success
        // console.log(response.data.slice(0, 4));
        return setPodsArray(response.data);
      })
      .catch((error) => {
        // handle error
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  }, []);

  useEffect(() => {
    handleRequest1();
    handleRequest2();
  }, [handleRequest1, handleRequest2]);


    return (
        <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
            <div className="container container-fluid p-5">
                <h1 className="display-4 pb-5">{projectHeading}</h1>
                <div className="row">
                {projectsArray.map((project) => (
                    <MyCard project={project}/>
                ))}
                </div>
            </div>

            <div className="container container-fluid p-5">
                <h1 className="display-4 pb-5">CocoaPods</h1>
                <div className="row">
                {podsArray.map((pod) => (
                    <MyPodCard pod={pod}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default MyProject;