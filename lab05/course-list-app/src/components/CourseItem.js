function CourseItem({ courseName, instructor, duration, type }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "16px",
        margin: "12px auto",
        maxWidth: "400px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>{courseName}</h3>

      <p style={{ margin: "4px 0", color: "#555" }}>
        Instructor: {instructor}
      </p>

      <p style={{ margin: "4px 0", color: "#555" }}>
        Duration: {duration}
      </p>

      <span
        style={{
          display: "inline-block",
          marginTop: "8px",
          padding: "4px 10px",
          borderRadius: "20px",
          background: type === "Online" ? "#e0f7fa" : "#fff3e0",
          fontSize: "12px",
          fontWeight: "bold"
        }}
      >
        {type}
      </span>
    </div>
  );
}

export default CourseItem;