import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

const Accordioning = ({ title, description, children }) => {
  const [isActive, setIsActive] = useState(false);

  console.log(description);

  return (
    <div className="">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className="accordion-title lb_accord_wrap"
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className="lb_accord_title"
          style={{
            fontSize: "1.2rem",
          }}
        >
          {title}
        </div>
        <div
          className="accodion_icon"
          style={{
            fontSize: "1.2rem",
          }}
        >
          {isActive ? (
            "-"
          ) : (
            <>
              <FiPlusCircle size={18} />
            </>
          )}
        </div>
      </div>
      {isActive && (
        <div className="lb_accord_panel">
          <div className="">
            <div className="row">
              {!description ? null : (
                <p className="summaryTwo">{description}</p>
              )}

              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordioning;
