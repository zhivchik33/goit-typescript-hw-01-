
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleDescrDEgault = Record<UserRole, string>;

const RoleDescription: RoleDescrDEgault = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
