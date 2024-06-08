// LocationForm.js
import React, { useState } from "react";

const LocationForm = ({ location, onSubmit, onCancel }) => {
  const [details, setDetails] = useState("");
  const [type, setType] = useState("");
  const [customType, setCustomType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalType = type === "Other" ? customType : type;
    onSubmit({ location, type: finalType, details });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label>
          Location:
          <input type="text" value={`Lat: ${location[0]}, Lng: ${location[1]}`} readOnly />
        </label>
      </div>
      <div>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="">Select type</option>
            <option value="Flooding">Flooding</option>
            <option value="Illegal Dumping">Illegal Dumping</option>
            <option value="Pothole">Pothole</option>
            <option value="Blocked Drain">Blocked Drain</option>
            <option value="Down Power Line">Down Power Line</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      {type === "Other" && (
        <div>
          <label>
            Custom Type:
            <input
              type="text"
              value={customType}
              onChange={(e) => setCustomType(e.target.value)}
              required
            />
          </label>
        </div>
      )}
      <div>
        <label>
          Details:
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

const formStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "5px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1001
};

export default LocationForm;
