const fetch = require("node-fetch");

it("4 address: it should work with sample data", async () => {
  const validData = {
    addresses: [
      {
        account: "0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b",
        balance: "1000000063000",
      },
      {
        account: "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
        balance: "212469988139460612",
      },
      {
        account: "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
        balance: "42000",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
    ],
    totalBalance: "212470988139565612",
  };
  const response = await fetch("http://localhost:3000/api/total-balance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      addresses: [
        "0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b",
        "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
        "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
        "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
      ],
    }),
  });
  const data = await response.json();
  expect(data).toStrictEqual(validData);
});

it("21 address: it should work with sample data", async () => {
  const validData = {
    addresses: [
      {
        account: "0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b",
        balance: "1000000063000",
      },
      {
        account: "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
        balance: "212469988139460612",
      },
      {
        account: "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
        balance: "42000",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
      {
        account: "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        balance: "0",
      },
    ],
    totalBalance: "212470988139565612",
  };
  const response = await fetch("http://localhost:3000/api/total-balance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      addresses: [
        "0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b",
        "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
        "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
        "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
        ...Array(17).fill("0x0560de6E5a452a00F58a90cb5501C18e77EB91B4"),
      ],
    }),
  });
  const data = await response.json();
  expect(data).toStrictEqual(validData);
});

it("101 address: it should throw error", async () => {
  const response = await fetch("http://localhost:3000/api/total-balance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      addresses: Array(101).fill("0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b"),
    }),
  });
  const data = await response.json();
  expect(data).toStrictEqual({ error: "wrong body" });
});

it("0 address: it should throw error", async () => {
  const response = await fetch("http://localhost:3000/api/total-balance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      addresses: [],
    }),
  });
  const data = await response.json();
  expect(data).toStrictEqual({ error: "wrong body" });
});

it("1 wrong address: it should throw error", async () => {
    const response = await fetch("http://localhost:3000/api/total-balance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        addresses: ["wrong_address"],
      }),
    });
    const data = await response.json();
    expect(data).toStrictEqual({ error: "wrong body" });
  });
