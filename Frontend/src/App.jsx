import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState("");
  const [newComment, setNewComment] = useState({});

  // Create new announcement
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title) {
      setError("Title is required");
      return;
    }

    const newAnnouncement = {
      id: Date.now(), // unique ID
      title,
      description,
      status: "active",
      like: 0,
      dislike: 0,
      comments: [],
      createdAt: new Date().toISOString(),
      closedAt: null,
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setTitle("");
    setDescription("");
  };

  // Update status
  const updateStatus = (id, status) => {
    setAnnouncements((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status,
              closedAt: status === "closed" ? new Date().toISOString() : null,
            }
          : a
      )
    );
  };

  // Add comment
  const handleCommentChange = (id, value) => {
    setNewComment((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddComment = (id) => {
    if (!newComment[id]) return;

    setAnnouncements((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, comments: [...a.comments, newComment[id]] }
          : a
      )
    );

    setNewComment((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Announcements</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <div>
          <input
            type="text"
            placeholder="Title (required)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "70%",
              padding: "0.7rem",
              marginBottom: "0.7rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "1rem",
              outline: "none",
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "70%",
              padding: "0.7rem",
              marginBottom: "0.7rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "1rem",
              outline: "none",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!title}
          style={{
            padding: "0.5rem 1rem",
            background: title ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            cursor: title ? "pointer" : "not-allowed",
          }}
        >
          Add Announcement
        </button>
      </form>

      {error && <p style={{ color: "red" }}>⚠ {error}</p>}

      {announcements.length === 0 ? (
        <p>No announcements yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {announcements.map((a) => (
            <li
              key={a.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "0.5rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ margin: 0 }}>
                  {a.title}{" "}
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: a.status === "active" ? "green" : "gray",
                    }}
                  >
                    ({a.status})
                  </span>
                </h3>
                <small style={{ color: "#666", fontSize: "0.8rem" }}>
                  {new Date(a.createdAt).toLocaleString()}
                </small>
              </div>

              {a.description && <p>{a.description}</p>}

              {a.status === "closed" && a.closedAt && (
                <p style={{ fontSize: "0.7rem", color: "#d9534f", marginTop: "0.5rem" }}>
                  <strong>Closed at:</strong> {new Date(a.closedAt).toLocaleString()}
                </p>
              )}

              {a.status === "active" && (
                <button
                  onClick={() => updateStatus(a.id, "closed")}
                  style={{
                    padding: "0.3rem 0.6rem",
                    background: "tomato",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                  }}
                >
                  Close
                </button>
              )}

              <div style={{ marginTop: "0.5rem" }}>
                <button
                  style={{ color: "blue", marginRight: "8px" }}
                  onClick={() =>
                    setAnnouncements((prev) =>
                      prev.map((item) =>
                        item.id === a.id ? { ...item, like: item.like + 1 } : item
                      )
                    )
                  }
                >
                  Like {a.like}
                </button>
                <button
                  style={{ color: "blue", marginRight: "8px" }}
                  onClick={() =>
                    setAnnouncements((prev) =>
                      prev.map((item) =>
                        item.id === a.id ? { ...item, dislike: item.dislike + 1 } : item
                      )
                    )
                  }
                >
                  Dislike {a.dislike}
                </button>
                <span style={{ fontSize: "0.9rem", color: "#555" }}>
                  {a.comments.length} Comments
                </span>
              </div>

              <div style={{ marginTop: "0.5rem" }}>
                <input
                  type="text"
                  value={newComment[a.id] || ""}
                  onChange={(e) => handleCommentChange(a.id, e.target.value)}
                  placeholder="Add a comment"
                  style={{ marginRight: "8px", padding: "4px" }}
                />
                <button style={{ color: "blue" }} onClick={() => handleAddComment(a.id)}>
                  Post
                </button>
                <div style={{ marginTop: "6px" }}>
                  {a.comments.map((c, i) => (
                    <p key={i} style={{ margin: "4px 0" }}>
                      • {c}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
