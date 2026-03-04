let users = [
  { id: 1, name: "Sasha", email: "sasha@gmail.com" },
  { id: 2, name: "Alex", email: "alex@gmail.com" }
];

export async function GET() {
  return Response.json(users);
}

export async function POST(req) {
  const body = await req.json();

  const newUser = {
    id: users.length + 1,
    ...body,
  };

  users.push(newUser);

  return Response.json(newUser, { status: 201 });
}

export async function PUT(req) {
  const body = await req.json();

  users = users.map((user) =>
    user.id === body.id ? { ...user, ...body } : user
  );

  return Response.json({ message: "User updated successfully" });
}

export async function DELETE(req) {
  const body = await req.json();

  users = users.filter((user) => user.id !== body.id);

  return Response.json({ message: "User deleted successfully" });
}