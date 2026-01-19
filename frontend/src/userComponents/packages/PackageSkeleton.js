import React from "react";

export default function PackageSkeleton() {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow h-100 p-4">
        <div
          className="skeleton mb-3"
          style={{ height: "25px", width: "70%" }}
        ></div>
        <div
          className="skeleton mb-2"
          style={{ height: "20px", width: "50%" }}
        ></div>
        <div
          className="skeleton mb-3"
          style={{ height: "15px", width: "90%" }}
        ></div>

        <ul className="list-unstyled">
          <li
            className="skeleton mb-2"
            style={{ height: "12px", width: "100%" }}
          ></li>
          <li
            className="skeleton mb-2"
            style={{ height: "12px", width: "95%" }}
          ></li>
          <li
            className="skeleton mb-2"
            style={{ height: "12px", width: "85%" }}
          ></li>
        </ul>

        <div
          className="skeleton mt-3"
          style={{ height: "40px", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}
