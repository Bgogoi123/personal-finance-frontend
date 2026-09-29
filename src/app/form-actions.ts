"use server";

export async function signUpAction(e: FormData) {
  console.log(e, e.get("name"));
}

export async function loginAction(e: FormData) {
  "use server";
  console.log(
    `login action :: identifier : ${e.get("identifier")}, password: ${e.get(
      "password"
    )}`
  );
}
