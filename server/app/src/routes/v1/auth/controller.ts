import { RoleCode } from "../../../database/model/Role";
import User, { UserModel } from "../../../database/model/User";
import bcrypt from 'bcrypt';

export default class AuthController {

    public static async login(req: any, res: any) {
        
        

    }

    public static async signup(req: any, res: any) {
        
        if (req.role == RoleCode.ADMIN) console.log("forbidden");

        const { name, email, password } = req.body;

        const User: User | any = req.body;
        const roleCode = req.role;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            role: RoleCode.User
        });

        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });

    }

}
