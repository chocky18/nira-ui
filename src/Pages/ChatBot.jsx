import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
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
  const [previewURL, setPreviewURL] = useState(null);
  const [response, setResponse] = useState("");
  const [metrics, setMetrics] = useState({});
  const [steps, setSteps] = useState([]);
  const [responseImages, setResponseImages] = useState(null);
  const [greeting, setGreeting] = useState("");

  const responseRef = useRef(null);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good Morning");
    else if (currentHour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [response, metrics, steps]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Please upload a JPG or PNG image.");
      return;
    }

    // Validate file size (min 10 KB)
    if (file.size < 10 * 1024) {
      alert("Image is too small. Please upload an image larger than 10 KB.");
      return;
    }

    // Set image & preview
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewURL(reader.result);
    reader.readAsDataURL(file);
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

    console.log("🖼️ Selected image:", image);
    console.log("Type:", image?.type, "Size:", image?.size);

    try {
      const res = await axios.post("https://nira-ai-chat.duckdns.org/chat", formData);

      console.log("🌐 Full Backend Response:", res.data);

      setResponse(res.data.response ?? "");
      setMetrics(typeof res.data.metrics === "object" ? res.data.metrics : {});
      setSteps(Array.isArray(res.data.steps) ? res.data.steps : []);

      const { images } = res.data;
      if (images) {
        setResponseImages({
          original: images.original || null,
          enhanced: images.enhanced || null,
          masks: images.masks || {},
          cv2_filters: images.cv2_filters || {},
        });
      } else {
        setResponseImages(null);
      }
    } catch (error) {
      console.error("❌ Error during request:", error);
      setResponse("Error: Could not connect to backend.");
      setMetrics({});
      setSteps([]);
      setResponseImages(null);
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <img src="/images/logo.png" alt="Logo" />
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
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" />
          <span className="collapse-icon">⏴</span>
        </div>
      </div>

      {/* Main Chat UI */}
      <div className="chatbot-container">
        <div className="chatbot-logo">⚡ {greeting}</div>

        <div className="chatbot-response-container">
          <div className="chatbot-text-output" ref={responseRef}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
                {response && (
                  <div className="chat-section">
                    <h3>✅ Response:</h3>
                    <p>{response}</p>
                  </div>
                )}

                {/* Image Preview */}
                {previewURL && (
                  <div className="chat-section">
                    <h3>🖼 Preview:</h3>
                    <img src={previewURL} alt="Preview" className="chat-image" />
                  </div>
                )}
              </div>

              <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
                {metrics && Object.keys(metrics).length > 0 && (
                  <div className="chat-section">
                    <h3>🧪 Metrics:</h3>
                    {Object.entries(metrics).map(([region, regionMetrics]) => (
                      <div key={region} className="metric-region-block">
                        <h4 className="text-lg font-bold capitalize mb-2">{region}</h4>
                        <ul className="metric-list space-y-1">
                          {Object.entries(regionMetrics).map(([metric, value]) => {
                            if (typeof value === "object" && "severity" in value) {
                              const severityClass =
                                value.severity === "mild" ? "badge mild" :
                                  value.severity === "moderate" ? "badge moderate" :
                                    "badge severe";
                              return (
                                <li key={metric} className="flex justify-between items-center">
                                  <span className="capitalize">{metric}</span>
                                  <span className={severityClass}>{value.severity}</span>
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
                                    <img
                                      src={`data:image/png;base64,${filters[key]}`}
                                      alt={`${region}-${key}`}
                                      className="chat-image"
                                    />
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

        {/* Input */}
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
            <button className="circle-button send" onClick={handleSubmit}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
