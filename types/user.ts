export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  avatar?: string | null;
  bio?: string | null;
  isActive: boolean;
  lastLogin: string; // ISO date string
  following: string[]; // array of userIds
  followers: string[];
  createdAt: string;
  updatedAt: string;
}

// ✅ Matches backend CreateUserDto
export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: UserRole;
  avatar?: string;
  bio?: string;
}
