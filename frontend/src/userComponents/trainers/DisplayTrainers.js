{
  // import React from "react";
  // export default function DisplayTrainers(props) {
  //   const { trainersValue } = props;
  //   if (!trainersValue || trainersValue.length === 0) {
  //     return <div className="alert alert-warning">No trainers available</div>;
  //   }
  //   return (
  //     <div className="row">
  //       {trainersValue.map((t, index) => (
  //         <div className="col-md-4 mb-3" key={index}>
  //           <div className="card shadow-sm h-100">
  //             <div className="card-body">
  //               <h5 className="card-title">{t.name}</h5>
  //               <p className="card-text">
  //                 <strong>Specialization:</strong> {t.specialization || "N/A"}
  //               </p>
  //               <p className="card-text">
  //                 <strong>Experience:</strong> {t.experience || 0} years
  //               </p>
  //               <p className="card-text">
  //                 <strong>Contact:</strong> {t.contact || "N/A"}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  // import React from "react";
  // export default function DisplayTrainers({ trainersValue }) {
  //   if (!trainersValue || trainersValue.length === 0) {
  //     return (
  //       <div className="alert alert-warning text-center fs-5">
  //         No trainers available
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="row">
  //       {trainersValue.map((t, index) => (
  //         <div className="col-md-4 mb-4" key={index}>
  //           <div
  //             className="card h-100 shadow-lg border-0 rounded-4 trainer-card"
  //             style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
  //           >
  //             <div className="card-body text-center">
  //               <div className="mb-3">
  //                 <i className="bi bi-person-badge fs-1 text-primary"></i>
  //               </div>
  //               <h5 className="card-title fw-bold text-dark">{t.name}</h5>
  //               <p className="card-text mb-2">
  //                 <strong>Specialization:</strong>{" "}
  //                 <span className="text-muted">{t.specialization || "N/A"}</span>
  //               </p>
  //               <p className="card-text mb-2">
  //                 <strong>Experience:</strong>{" "}
  //                 <span className="text-muted">{t.experience || 0} years</span>
  //               </p>
  //               <p className="card-text">
  //                 <strong>Contact:</strong>{" "}
  //                 <span className="text-muted">{t.contact || "N/A"}</span>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  // -------------------------------------------------------------------------------------------------
  // import React from "react";
  // import { BASE_URL } from "../../mainUrl";
  // // const BASE = "http://localhost:8080";
  // // const BASE = "https://final-gym-backend.onrender.com";
  // export default function DisplayTrainers({ trainersValue }) {
  //   if (!trainersValue || trainersValue.length === 0) {
  //     return (
  //       <div className="alert alert-warning text-center fs-5">
  //         No trainers available
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="row">
  //       {trainersValue.map((t, index) => (
  //         <div className="col-md-4 mb-4" key={index}>
  //           <div
  //             className="card h-100 shadow-lg border-0 rounded-4 trainer-card"
  //             style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
  //           >
  //             <div className="card-body text-center">
  //               <div className="mb-3">
  //                 {t.imageName ? (
  //                   <img
  //                     src={t.imageName}
  //                     alt={t.name}
  //                     className="rounded-circle shadow"
  //                     width="100"
  //                     height="100"
  //                     style={{ objectFit: "cover" }}
  //                   />
  //                 ) : (
  //                   <i className="bi bi-person-badge fs-1 text-primary"></i>
  //                 )}
  //               </div>
  //               <h5 className="card-title fw-bold text-dark">{t.name}</h5>
  //               <p className="card-text mb-2">
  //                 <strong>Specialization:</strong>{" "}
  //                 <span className="text-muted">{t.specialization || "N/A"}</span>
  //               </p>
  //               <p className="card-text mb-2">
  //                 <strong>Experience:</strong>{" "}
  //                 <span className="text-muted">{t.experience || 0} years</span>
  //               </p>
  //               {/* <p className="card-text">
  //                 <strong>Contact:</strong>{" "}
  //                 <span className="text-muted">{t.phone || "N/A"}</span>
  //               </p> */}
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
}

import React from "react";
import { BASE_URL } from "../../mainUrl";

export default function DisplayTrainers({ trainersValue, loading }) {
  const skeletonCards = Array.from({ length: 6 });

  return (
    <section className="py-0 bg-light bg-opacity-25 mb-5" id="trainers">
      <div className="container py-4">
        {/* HEADING */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <h2 className="fw-bold position-relative d-inline-block pb-3">
              Our Trainers
              <span
                className="position-absolute bottom-0 start-50 translate-middle-x bg-danger"
                style={{ height: "3px", width: "100%" }}
              ></span>
            </h2>
            <p className="lead text-muted">
              Meet our professional and certified fitness trainers
            </p>
          </div>
        </div>

        <div className="row">
          {loading
            ? skeletonCards.map((_, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card h-100 shadow border-0 rounded-4 p-3">
                    <div className="card-body text-center">
                      <div
                        className="rounded-circle bg-secondary mx-auto mb-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          opacity: 0.3,
                        }}
                      ></div>

                      <div
                        className="bg-secondary mx-auto mb-2"
                        style={{
                          width: "60%",
                          height: "16px",
                          opacity: 0.3,
                        }}
                      ></div>

                      <div
                        className="bg-secondary mx-auto mb-2"
                        style={{
                          width: "80%",
                          height: "12px",
                          opacity: 0.2,
                        }}
                      ></div>

                      <div
                        className="bg-secondary mx-auto"
                        style={{
                          width: "50%",
                          height: "12px",
                          opacity: 0.2,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))
            : trainersValue &&
              trainersValue.map((t) => (
                <div className="col-md-4 mb-4" key={t.id}>
                  <div
                    className="card h-100 shadow-lg border-0 rounded-4 trainer-card"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div className="card-body text-center">
                      <div className="mb-3">
                        {t.imageName ? (
                          <img
                            src={`${t.imageName}`}
                            alt={t.name || "Trainer"}
                            className="rounded-circle shadow"
                            width="100"
                            height="100"
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <i className="bi bi-person-badge fs-1 text-secondary"></i>
                        )}
                      </div>

                      <h5 className="card-title fw-bold text-dark">
                        {t.name || "Unknown Trainer"}
                      </h5>

                      <p className="card-text mb-2">
                        <strong>Specialization:</strong>{" "}
                        <span className="text-muted">
                          {t.specialization || "N/A"}
                        </span>
                      </p>

                      <p className="card-text mb-2">
                        <strong>Experience:</strong>{" "}
                        <span className="text-muted">
                          {t.experience || 0} years
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
