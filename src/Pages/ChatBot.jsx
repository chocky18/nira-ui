import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo (2).png";
import {
  FaSearch,
  FaCommentDots,
  FaCube,
  FaHistory,
  FaPaperclip,
  FaLightbulb,
  FaArrowUp,
} from "react-icons/fa";
import "./ChatBot.css";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState("");
  const [metrics, setMetrics] = useState({});
  const [steps, setSteps] = useState([]);
  const [responseImages, setResponseImages] = useState(null);
  const [greeting, setGreeting] = useState("");


  const responseRef = useRef(null);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);



  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [response, metrics, steps]);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("message", message);
    formData.append("image_file", image);

    try {
      // const res = await axios.post(`${import.meta.env.VITE_API_URL}/chat`, formData);
      const res = await axios.post(`http://3.237.39.168:8000/chat`, formData);


      console.log("Server response:", res.data);

      setResponse(res.data.response);
      setMetrics(res.data.metrics);
      setSteps(res.data.steps);
      setResponseImages({
        original: res.data.images?.original || null,
        enhanced: res.data.images?.enhanced || null,
        masks: res.data.images?.masks || {},
        cv2_filters: res.data.images?.cv2_filters || {},
      });
    } catch (error) {
      console.error("Error during request:", error);
      setResponse("Error: Could not connect to backend.");
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sidebar-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Ctrl+K" />
        </div>
        <div className="sidebar-icons">
          <p><FaCommentDots /> Chat</p>
          <p><FaCube /> Workspaces</p>
          <p><FaHistory /> History</p>
        </div>
        <div className="sidebar-profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
          />
          <span className="collapse-icon">⏴</span>
        </div>
      </div>

      {/* Main Chat UI */}
      <div className="chatbot-container">
        <div className="chatbot-logo">⚡{greeting}</div>

        <div className="chatbot-response-container">
          <div className="chatbot-text-output" ref={responseRef}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {/* LEFT COLUMN: RESPONSE */}
              <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
                {response && (
                  <div className="chat-section">
                    <h3>✅ Response:</h3>
                    <p>{response}</p>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: METRICS, STAGES, IMAGES */}
              <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
                {Object.keys(metrics).length > 0 && (
                  <div className="chat-section">
                    <h3>🧪 Metrics:</h3>
                    {Object.entries(metrics).map(([region, regionMetrics]) => (
                      <div key={region} className="metric-region-block">
                        <h4 className="text-lg font-bold capitalize mb-2">{region}</h4>
                        <ul className="metric-list space-y-1">
                          {Object.entries(regionMetrics).map(([metric, value]) => {
                            if (typeof value === "object" && value !== null && "severity" in value) {
                              const severity = value.severity;
                              let severityClass = "";
                              if (severity === "mild") severityClass = "badge mild";
                              else if (severity === "moderate") severityClass = "badge moderate";
                              else if (severity === "severe") severityClass = "badge severe";
                              return (
                                <li key={metric} className="flex justify-between items-center">
                                  <span className="capitalize">{metric}</span>
                                  <span className={severityClass}>{severity}</span>
                                </li>
                              );
                            } else {
                              return (
                                <li key={metric} className="text-sm text-gray-600">
                                  {metric}: {Array.isArray(value) ? value.join(", ") : value}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {steps.length > 0 && (
                  <div className="chat-section">
                    <h3>🛠 Stages:</h3>
                    <ul>
                      {steps.map((step, index) => (
                        <li key={index}>
                          <strong>{step.stage}</strong>: {step.msg}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {responseImages && (
                  <div className="chatbot-image-output">
                    <h3>🖼 Images:</h3>

                    {responseImages.original && (
                      <div className="image-preview-block">
                        <p><strong>Original Image:</strong></p>
                        <img src={`data:image/jpeg;base64,${responseImages.original}`} alt="Original" className="chat-image" />
                      </div>
                    )}

                    {responseImages.enhanced && (
                      <div className="image-preview-block">
                        <p><strong>Enhanced Image:</strong></p>
                        <img src={`data:image/jpeg;base64,${responseImages.enhanced}`} alt="Enhanced" className="chat-image" />
                      </div>
                    )}

                    {responseImages.masks && Object.keys(responseImages.masks).length > 0 && (
                      <div className="image-preview-block">
                        <p><strong>Face Parsing Masks:</strong></p>
                        <div className="mask-grid">
                          {Object.entries(responseImages.masks).map(([key, base64]) => (
                            <div key={key}>
                              <p>{key}</p>
                              <img src={`data:image/png;base64,${base64}`} alt={key} className="chat-image" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {responseImages.cv2_filters && Object.keys(responseImages.cv2_filters).length > 0 && (
                      <div className="chat-section">
                        <h3>🧪 Region-wise CV2 Transformations:</h3>
                        {Object.entries(responseImages.cv2_filters).map(([region, filters]) => (
                          <div key={region} className="region-transform-block">
                            <h4>{region}</h4>
                            <div className="transform-row">
                              {["masked", "blurred", "edges", "laplacian"].map((key) =>
                                filters[key] && (
                                  <div key={key} className="transform-step">
                                    <p>{key}</p>
                                    <img src={`data:image/png;base64,${filters[key]}`} alt={`${region}-${key}`} className="chat-image" />
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="chatbot-input-box">
          <input
            type="text"
            placeholder="What do you want to know"
            className="chatbot-placeholder"
            value={message}
            onChange={handleMessageChange}
          />
          <input
            type="file"
            accept="image/*"
            className="chatbot-upload"
            onChange={handleImageUpload}
          />
          <div className="chatbot-input-actions">
            <button className="circle-button"><FaPaperclip /></button>
            <button className="pill-button">🔗 DeepSearch ▼</button>
            <button className="pill-button"><FaLightbulb /> Think</button>
            <div className="grow" />
            <button className="text-button">NIRA AI▼</button>
            <button className="circle-button send" onClick={handleSubmit}><FaArrowUp /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

