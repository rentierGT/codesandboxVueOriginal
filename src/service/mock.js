import Service from "./";

const mockUserData = [
  { n: "Mustermann", fn: "Max" },
  { n: "Strauß", fn: "Steffan" },
  { n: "Müller", fn: "Fritz" },
  { n: "Schmidt", fn: "Klaus" },
  { n: "Bauer", fn: "Gabi" }
];

const mockUser = mockUserData.map(userData =>
  Service.createUser(userData.n, userData.fn)
);

mockUser.map(user =>
  Service.createArticle(
    user.userId,
    "Facilisis nec magna odio purus aliquet.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl eleifend dolor accumsan, suspendisse fringilla et tempor. Nisi, vitae, tempor convallis nam dignissim at et. In auctor sagittis nulla enim adipiscing dui."
  )
);
