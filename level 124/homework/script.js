const users = [
  { email: "user1@example.com" },
  { email: "user2@example.com" },
  { email: "user3@example.com" }
];

const formattedEmails = users.map(user => `<${user.email}>`);

console.log(formattedEmails);


