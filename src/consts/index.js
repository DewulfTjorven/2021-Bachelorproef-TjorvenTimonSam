const ROUTES = {
  home: "/",
  conversation: { path: "/:id", to: "/" },
  groups: "/groups",
  addgroup: "/addgroup",
  users: "/users",
  adduser: "/adduser",
  userDetail: { path: "/users/:id", to: "/users/" },
  groupDetail: { path: "/groups/:id", to: "/groups/" }
};

export { ROUTES };
