import fs from "fs";

function deleteUser(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("User ID is required");
    }

    if (!fs.existsSync("movie_user.json")) {
      return res.status(404).send("No users found");
    }

    let users = JSON.parse(fs.readFileSync("movie_user.json", "utf-8"));

    const newUsers = users.filter(user => user.id != id);

    if (users.length === newUsers.length) {
      return res.status(404).send("User not found");
    }

    fs.writeFileSync(
      "movie_user.json",
      JSON.stringify(newUsers, null, 2)
    );

    res.status(200).send("User deleted successfully");

  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
}

export default deleteUser;
