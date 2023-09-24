const db = require("./database");

// Example usage
(async () => {
  try {
    const result = await db.executeQuery("SELECT * FROM books");
    console.log(result);
  } catch (error) {
    console.error("Error executing query:", error);
  }
})();
