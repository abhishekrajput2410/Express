let users = [
    { id: 1, name: "Abhi" },
    { id: 2, name: "Rahul" }
];

exports.getUsers = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching users"
        });
    }
};

exports.addUsers = (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name is required"
            });
        }

        const newUser = {
            id: users.length + 1,
            name
        };

        users.push(newUser);

        res.status(201).json({
            success: true,
            message: "User added successfully",
            data: newUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error adding user"
        });
    }
};

exports.getUserById = (req, res) => {
    try {
        const userId = parseInt(req.params.id);

        const user = users.find(u => u.id === userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching user"
        });
    }
};